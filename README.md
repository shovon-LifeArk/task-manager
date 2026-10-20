# Mini Task Board

A small task board built with Svelte 5, TypeScript, and Vite. All state is held in memory, so changes reset when the page is reloaded.

## Features

- Six sample tasks on load
- Add new tasks with a title, description, and priority
- Mark tasks as Done or move them back to To Do
- Tasks grouped into To Do and Done sections
- Total task count

## Requirements

- Node.js 20 or 22 (LTS)
- npm

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Scripts

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the development server              |
| `npm run build`   | Build for production into `dist/`         |
| `npm run preview` | Preview the production build locally      |
| `npm run check`   | Run Svelte and TypeScript type checking   |

## Project structure

```
src/
├── App.svelte                 Main application and state management
├── app.css                    Application styling
├── main.ts                    Entry point
├── components/
│   ├── TaskCard.svelte        Individual task display
│   ├── TaskForm.svelte        Add task form
│   └── TaskList.svelte        Task listing
└── lib/
    ├── sampleTasks.ts         Initial task data
    └── types.ts               TypeScript types
```

## How it works

- `App.svelte` owns the `tasks` array (using Svelte's `$state` rune) and passes tasks and callback functions down to child components as props.
- `TaskForm` calls `onAdd` with the new task's details when submitted.
- `TaskList` renders a heading and a `TaskCard` for each task it receives.
- `TaskCard` calls `onToggle` with the task ID when its button is clicked.
