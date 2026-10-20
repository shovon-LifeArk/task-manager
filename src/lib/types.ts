export type Priority = 'Low' | 'Medium' | 'High';

export type Status = 'To Do' | 'Done';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  createdAt: string; // ISO 8601 timestamp in UTC, e.g. 2026-10-14T09:30:00.000Z
}

export type NewTask = Omit<Task, 'id' | 'status' | 'createdAt'>;
