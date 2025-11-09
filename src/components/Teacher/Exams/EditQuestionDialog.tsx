import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"; // If needed elsewhere; not used here
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SquarePen, X } from "lucide-react";
import type { Choice } from "@/MockData/Teacher/Choice";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define Zod schema for the form (adjust validations as needed)
const formSchema = z.object({
  question: z.string().min(1, { message: "Question text is required." }),
  type: z.enum(["mcq", "tf"], { message: "Invalid question type." }),
  marks: z.number().min(0, { message: "Marks must be a non-negative number." }),
  choices: z
    .array(
      z.object({
        id: z.number(),
        text: z.string().min(1, { message: "Choice text is required." }),
        isCorrect: z.boolean(),
      })
    )
    .min(2, { message: "At least 2 choices are required." })
    .refine(
      (choices) => choices.filter((c) => c.isCorrect).length === 1,
      { message: "Exactly one choice must be marked as correct." }
    ),
});

type FormValues = z.infer<typeof formSchema>;

export function EditQuestionDialog({ choices }: { choices: Choice[] | null }) {
  // Initialize form with React Hook Form and Zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      type: "mcq",
      marks: 0,
      choices: [],
    },
    mode: "onChange",
  });

  const { fields, append, remove, update } = useFieldArray({
    control: form.control,
    name: "choices",
  });

  useEffect(() => {
    if (choices && choices.length > 0) {
      form.reset({
        question: choices[0].question.text || "", 
        type: "mcq",
        marks: 0,
        choices: choices.map((c) => ({
          id: c.id,
          text: c.text,
          isCorrect: c.isCorrect,
        })),
      });
    }
  }, [choices, form]);

  const setCorrectAnswer = (index: number) => {
    fields.forEach((_, i) => {
      update(i, { ...fields[i], isCorrect: i === index });
    });
  };

  const addChoice = () => {
    const maxId = fields.length > 0 ? Math.max(...fields.map((c) => c.id)) : 0;
    append({
      id: maxId + 1,
      text: "",
      isCorrect: false,
    });
  };

  const removeChoice = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: FormValues) => {
    console.log("Submitted data:", data);
    form.reset(); 
  };

  const correctChoiceId = fields.find((field) => field.isCorrect)?.id ?? null;

  const handleTypeChange = (value: "mcq" | "tf") => {
    form.setValue("type", value);
    if (value === "tf") {
      form.setValue("choices", [
        { id: 1, text: "True", isCorrect: false },
        { id: 2, text: "False", isCorrect: false },
      ]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <SquarePen />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Question</DialogTitle>
          <DialogDescription>
            Modify the details for the selected question.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-3 overflow-y-auto max-h-[60vh]">
              {/* Question Text */}
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question Text</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Question Text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Question Type */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={(value: "mcq" | "tf") => {
                      field.onChange(value);
                      handleTypeChange(value);
                    }} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Question Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mcq">Multiple Choice</SelectItem>
                        <SelectItem value="tf">True/False</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Marks */}
              <FormField
                control={form.control}
                name="marks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marks</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Marks (e.g., 5)"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Choices Section */}
              <div className="flex justify-between items-center">
                <p>Answer Choices</p>
                {form.watch("type") === "mcq" && ( // Disable add for TF
                  <Button variant="outline" size="sm" type="button" onClick={addChoice}>
                    + Add Choice
                  </Button>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <RadioGroup
                  value={correctChoiceId}
                  onValueChange={(value) => {
                    const selectedIndex = fields.findIndex((field) => field.id === value);
                    if (selectedIndex !== -1) {
                      setCorrectAnswer(selectedIndex);
                    }
                  }}
                >
                  {fields.map((field, index) => (
                    <div
                      key={field.id} // Use field.id for key
                      className="flex items-center gap-2 p-3 border rounded-lg"
                    >
                      <RadioGroupItem value={field.id} />
                      <FormField
                        control={form.control}
                        name={`choices.${index}.text`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input placeholder="Enter choice text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {form.watch("type") === "mcq" && fields.length > 2 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeChoice(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </RadioGroup>
                {/* Display global choices error if any */}
                <FormMessage>{form.formState.errors.choices?.root?.message}</FormMessage>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}