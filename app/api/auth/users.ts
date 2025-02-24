// app/api/auth/users.ts
export type User = {
  id: string;
  name: string;
  email: string;
  password: string; // In a real app, this should be hashed!
};

export const users: User[] = []; // In-memory storage for MVP
