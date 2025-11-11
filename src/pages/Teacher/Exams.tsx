import { AddExamDialog } from "@/components/Teacher/Exams/AddExamDialog";
import ExamsCards from "@/components/Teacher/Exams/ExamsCards";
import SelectedExam from "@/components/Teacher/Exams/SelectedExam";
import type { Exam } from "@/MockData/Teacher/Exam";
import type { Question } from "@/MockData/Teacher/Question";
import type React from "react";
import { useEffect, useState } from "react";

export const exams: Exam[] = [
  {
    id: 1,
    title: "Advanced Algorithms",
    description:
      "A comprehensive exam covering dynamic programming, graphs, and complexity analysis.",
    duration: "90",
    startDate: "2025-12-10T09:00:00Z",
    endDate: "2025-12-10T10:30:00Z",
    createdBy: {
      id: 1,
      username: "john_doe",
      email: "john.doe@university.edu",
      firstName: "John",
      lastName: "Doe",
      bio: "Professor of Computer Science with 15 years of teaching experience.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      subscribe: {
        title: "Gold Membership",
        numsOfStudents: 240,
        numsOfExams: 12,
        description: "Access to all premium exam materials and practice sets.",
        createdAt: "2024-05-01T10:00:00Z",
        updatedAt: "2025-03-01T10:00:00Z",
        price: 49.99,
      },
      role: "Teacher",
      phoneNumber: "+201000000001",
    },
    published: true,
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    description: "Exam focused on HTML, CSS, and basic JavaScript concepts.",
    duration: "60",
    startDate: "2025-12-15T12:00:00Z",
    endDate: "2025-12-15T13:00:00Z",
    createdBy: {
      id: 2,
      username: "sara_smith",
      email: "sara.smith@edu.org",
      firstName: "Sara",
      lastName: "Smith",
      bio: "Frontend developer and mentor with a passion for teaching modern web technologies.",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      subscribe: {
        title: "Silver Membership",
        numsOfStudents: 180,
        numsOfExams: 8,
        description:
          "Includes intermediate-level content and live coding sessions.",
        createdAt: "2024-07-12T10:00:00Z",
        updatedAt: "2025-01-20T10:00:00Z",
        price: 29.99,
      },
      role: "Teacher",
      phoneNumber: "+201000000002",
    },
    published: true,
  },
  {
    id: 3,
    title: "Database Systems",
    description: "Covers relational models, SQL, and normalization concepts.",
    duration: "75",
    startDate: "2025-12-20T14:00:00Z",
    endDate: "2025-12-20T15:15:00Z",
    createdBy: {
      id: 3,
      username: "ahmed_ali",
      email: "ahmed.ali@faculty.edu",
      firstName: "Ahmed",
      lastName: "Ali",
      bio: "Database engineer and lecturer focusing on scalable data design.",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      subscribe: {
        title: "Platinum Membership",
        numsOfStudents: 320,
        numsOfExams: 15,
        description:
          "Includes lifetime access to advanced topics and hands-on projects.",
        createdAt: "2023-12-01T09:00:00Z",
        updatedAt: "2025-02-10T09:00:00Z",
        price: 79.99,
      },
      role: "Teacher",
      phoneNumber: "+201000000003",
    },
    published: false,
  },
];

const ExamPage: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (selectedExam) {
      // Fetch questions for the selected exam
      const questions = [
        {
          id: 1,
          exam: selectedExam,
          text: "Which of the following is used to declare a constant in JavaScript?",
          questionType: "Multiple Choice",
          marks: 5,
        },
        {
          id: 2,
          exam: selectedExam,
          text: "JavaScript is a statically typed language.",
          questionType: "True/False",
          marks: 3,
        },
        {
          id: 3,
          exam: selectedExam,
          text: "Which of the following is used to declare a constant in JavaScript?",
          questionType: "Multiple Choice",
          marks: 5,
        },
        {
          id: 4,
          exam: selectedExam,
          text: "JavaScript is a statically typed language.",
          questionType: "True/False",
          marks: 3,
        },
        {
          id: 5,
          exam: selectedExam,
          text: "Which of the following is used to declare a constant in JavaScript?",
          questionType: "Multiple Choice",
          marks: 5,
        },
        {
          id: 6,
          exam: selectedExam,
          text: "JavaScript is a statically typed language.",
          questionType: "True/False",
          marks: 3,
        },
        {
          id: 7,
          exam: selectedExam,
          text: "Which of the following is used to declare a constant in JavaScript?",
          questionType: "Multiple Choice",
          marks: 5,
        },
        {
          id: 8,
          exam: selectedExam,
          text: "JavaScript is a statically typed language.",
          questionType: "True/False",
          marks: 3,
        },
      ];

      setExamQuestions(questions);
    }
  }, [selectedExam]);

  return (
    <div className="flex flex-col md:flex md:flex-row p-4 md:justify-center gap-8 w-full md:items-start">
      <div className="flex flex-col w-full md:sticky md:top-10 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Exams</h1>
          <AddExamDialog />
        </div>
        <div className="ms-[-10px] mx-4 ">
          <ExamsCards
            exams={exams}
            selectedExam={(exam: Exam) => setSelectedExam(exam)}
          />
        </div>
      </div>
      <div className="w-full">
        {selectedExam ? (
          <SelectedExam exam={selectedExam} examQuestions={examQuestions} />
        ) : (
          <div className="p-4 text-center text-gray-500">No exam selected</div>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
