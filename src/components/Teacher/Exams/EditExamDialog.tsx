import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Exam } from "@/MockData/Teacher/Exam";
import { SquarePen } from "lucide-react";

const EditExamDialog = ({exam} : {exam: Exam}) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline"> <SquarePen /> Edit Exam</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Exam</DialogTitle>
            <DialogDescription>
              Fill in the details for the new exam.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Exam Title" value={exam.title} />

              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Exam Description"
                value={exam.description}
              />

              <Label htmlFor="duration">Duration</Label>
              <Input
                type="number"
                id="duration"
                name="duration"
                placeholder="Duration (e.g., 60 min)"
                value={exam.duration}
              />

              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" name="startDate" type="datetime-local" value={exam.startDate} />

              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" name="endDate" type="datetime-local" value={exam.endDate} />

              <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                <Checkbox
                  id="toggle-2"
                  defaultChecked
                  className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                />
                <div className="grid gap-1.5 font-normal">
                  <p className="text-sm leading-none font-medium">
                    Publish Exam
                  </p>
                  <p className="text-muted-foreground text-sm">
                    You can Publish or disable the exam at any time.
                  </p>
                </div>
              </Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default EditExamDialog;