export type Priority = 'Low' | 'Medium' | 'High';

export type Status = 'To Do' | 'Done';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
}

export type NewTask = Omit<Task, 'id' | 'status'>;
