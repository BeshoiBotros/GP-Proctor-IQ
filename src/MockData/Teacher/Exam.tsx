import type { Teacher } from "./Teacher";

export interface Exam {
    id: number;
    title: string;
    description: string;
    duration: string;
    startDate: string;
    endDate: string;
    createdBy: Teacher;
    published: boolean;
}