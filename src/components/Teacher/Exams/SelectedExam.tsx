import type { Exam } from "@/MockData/Teacher/Exam";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExamDetailCard from "./ExamDetailCard";
import type { Choice } from "@/MockData/Teacher/Choice";
import type { Question } from "@/MockData/Teacher/Question";
import QuestionChoiceCard from "./QuestionChoiceCard";

const SelectedExam = ({
  exam,
  examQuestions,
}: {
  exam: Exam;
  examQuestions: Question[];
}) => {
  return (
    <>
      {exam ? (
        <ExamDetailCard exam={exam} />
      ) : (
        <p className="text-center text-muted-foreground">
          Select an exam to see details
        </p>
      )}
      <Tabs defaultValue="questions" className="w-full mt-4">
        <TabsList className="w-full">
          <TabsTrigger value="questions">
            Questions({examQuestions.length})
          </TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
        </TabsList>
        <TabsContent value="questions">
          {examQuestions.map((question) => (
            <QuestionChoiceCard key={question.id} question={question} />
          ))}
        </TabsContent>
        <TabsContent value="overview">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
};
export default SelectedExam;
