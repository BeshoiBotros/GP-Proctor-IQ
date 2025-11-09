import type { Exam } from "./Exam";

export interface Question {
    id: number;
    exam: Exam;
    text: string;
    questionType: string;
    marks: number;
}
