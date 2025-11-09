import type { Question } from "./Question";

export interface Choice {
    id: number;
    question: Question;
    text: string;
    isCorrect: boolean;
}