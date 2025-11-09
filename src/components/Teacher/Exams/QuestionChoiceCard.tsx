import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Choice } from "@/MockData/Teacher/Choice";
import type { Question } from "@/MockData/Teacher/Question";
import { SquarePen, Trash2 } from "lucide-react";
import { EditQuestionDialog } from "./EditQuestionDialog";

const QuestionChoiceCard = ({ question }: { question: Question }) => {
  const choices: Choice[] = [
    { id: 1, question: question, text: "let", isCorrect: false },
    { id: 2, question: question, text: "var", isCorrect: false },
    { id: 3, question: question, text: "const", isCorrect: true },
    { id: 4, question: question, text: "static", isCorrect: false },
  ];

  return (
    <Card className="w-full p-4 mb-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="badges flex gap-3 items-center">
            <Badge variant="secondary" className="">
              {question.marks} Marks
            </Badge>
            <Badge>{question.questionType}</Badge>
          </div>

          <div className="actions flex gap-2">
            <EditQuestionDialog choices={choices} />

            <Button variant="destructive" size="icon">
              <Trash2 />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{question.text}</p>
        <div className="choices flex flex-col gap-2">
          {choices.map((choice) => (
            <div
              key={choice.id}
              className={
                choice.isCorrect
                  ? "p-2 border-2 border-green-500 rounded-md"
                  : "p-2 border rounded-md"
              }
            >
              {choice.text}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
export default QuestionChoiceCard;
