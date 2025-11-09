import type { Exam } from "@/MockData/Teacher/Exam";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
interface ExamsCardsProps {
  exams: Exam[];
  selectedExam: (exam: Exam) => void;
}

const ExamsCards = ({ exams, selectedExam }: ExamsCardsProps) => {
  const [selected, setSelected] = useState<Exam | null>(null);

  const selectingExam = (exam: Exam) => {
    selectedExam(exam);
    setSelected(exam);
  };
  return (
    <>
      {exams.map((exam) => (
        <Card
          key={exam.id}
          className={
            selected?.id === exam.id
              ? "w-full m-4 cursor-pointer border-2 border-blue-500 shadow-xl bg-primary-foreground transition-all"
              : "w-full m-4 cursor-pointer transition-all"
          }
          onClick={() => selectingExam(exam)}
        >
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{exam.title}</CardTitle>
              <Badge variant={exam.published ? "default" : "destructive"}>
                {exam.published ? "Published" : "Unpublished"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{exam.description}</CardDescription>
            <p className="flex gap-2 items-center pt-1"> <Clock size={16} /> <span className="flex justify-center items-center pt-0.5">{exam.duration} min</span></p>
            <p className="flex gap-2 items-center pt-1"> <Calendar size={16} /> <span className="flex justify-center items-center pt-1">{new Date(exam.startDate).toLocaleString()}</span></p>
            {/* <p>End Date: {new Date(exam.endDate).toLocaleString()}</p> */}
          </CardContent>
        </Card>
      ))}
    </>
  );
};
export default ExamsCards;
