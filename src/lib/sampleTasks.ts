import type { Task } from './types';

export const sampleTasks: Task[] = [
  {
    id: 1,
    title: 'Set up project repository',
    description: 'Create the repository and add the initial project files.',
    priority: 'High',
    status: 'Done',
  },
  {
    id: 2,
    title: 'Design landing page',
    description: 'Sketch a simple layout for the landing page hero and navigation.',
    priority: 'Medium',
    status: 'To Do',
  },
  {
    id: 3,
    title: 'Write onboarding guide',
    description: 'Document the steps a new team member needs to get started.',
    priority: 'Low',
    status: 'To Do',
  },
  {
    id: 4,
    title: 'Fix login form validation',
    description: 'Show a helpful message when the email address is invalid.',
    priority: 'High',
    status: 'To Do',
  },
  {
    id: 5,
    title: 'Update team calendar',
    description: 'Add the upcoming sprint review and planning meetings.',
    priority: 'Low',
    status: 'Done',
  },
  {
    id: 6,
    title: 'Review pull requests',
    description: 'Go through the open pull requests and leave feedback.',
    priority: 'Medium',
    status: 'To Do',
  },
];
