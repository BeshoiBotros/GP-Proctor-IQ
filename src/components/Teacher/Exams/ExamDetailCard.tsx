import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import type { Exam } from "@/MockData/Teacher/Exam";
import { Badge } from "@/components/ui/badge";
import EditExamDialog from "./EditExamDialog";
import { Calendar, Clock } from "lucide-react";

const ExamDetailCard = ({ exam }: { exam: Exam }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2>{exam.title}</h2>
          <div className="flex gap-2">
            <Badge
              className="rounded-md"
              variant={exam.published ? "default" : "destructive"}
            >
              {exam.published ? "Published" : "Unpublished"}
            </Badge>
            <EditExamDialog exam={exam} />
          </div>
        </div>
        <CardDescription>
          <p className="text-">{exam.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          <p>
            <span className="font-medium flex gap-2"><Clock size={16} /> Duration:</span>
            <p>{exam.duration} min</p>
          </p>
          <p>
            <span className="font-medium flex gap-2"><Calendar size={16} /> Start Date:</span>{" "}
            {new Date(exam.startDate).toLocaleString()}
          </p>
          <p>
            <span className="font-medium flex gap-2"><Calendar size={16} /> End Date:</span>{" "}
            {new Date(exam.endDate).toLocaleString()}
          </p>
        </div>

      </CardContent>
    </Card>
  );
};

export default ExamDetailCard;
