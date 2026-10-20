<script lang="ts">
  import TaskForm from './components/TaskForm.svelte';
  import TaskList from './components/TaskList.svelte';
  import { sampleTasks } from './lib/sampleTasks';
  import type { NewTask, Task } from './lib/types';

  let tasks = $state<Task[]>([...sampleTasks]);
  let nextId = $state(sampleTasks.length + 1);

  let todoTasks = $derived(tasks.filter((task) => task.status === 'To Do'));
  let doneTasks = $derived(tasks.filter((task) => task.status === 'Done'));

  function addTask(newTask: NewTask) {
    tasks.push({
      ...newTask,
      id: nextId,
      status: 'To Do',
      createdAt: new Date().toISOString(),
    });
    nextId += 1;
  }

  function toggleStatus(id: number) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.status = task.status === 'To Do' ? 'Done' : 'To Do';
    }
  }
</script>

<main class="container">
  <header class="header">
    <h1>Mini Task Board</h1>
    <p class="task-count">Total tasks: {tasks.length}</p>
  </header>

  <TaskForm onAdd={addTask} />

  <div class="board">
    <TaskList title="To Do" tasks={todoTasks} onToggle={toggleStatus} />
    <TaskList title="Done" tasks={doneTasks} onToggle={toggleStatus} />
  </div>
</main>
