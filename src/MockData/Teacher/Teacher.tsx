import type { Subscribe } from "./Subscribe";

export interface Teacher {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  image: string;
  subscribe: Subscribe;
  role: 'Teacher';
  phoneNumber: string;
}
