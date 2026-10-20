<script lang="ts">
  import type { Task } from '../lib/types';

  interface Props {
    task: Task;
    onToggle: (id: number) => void;
  }

  let { task, onToggle }: Props = $props();

  let isDone = $derived(task.status === 'Done');

  let createdAtLabel = $derived(
    new Date(task.createdAt).toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'medium',
      timeStyle: 'short',
    }) + ' UTC',
  );
</script>

<article class="task-card" class:task-card-done={isDone}>
  <div class="task-card-header">
    <h3 class="task-title">{task.title}</h3>
    <span class="priority">{task.priority}</span>
  </div>

  {#if task.description}
    <p class="task-description">{task.description}</p>
  {/if}

  <time class="task-created" datetime={task.createdAt}>Created at: {createdAtLabel}</time>

  <div class="task-card-footer">
    <span class="task-status">Status: {task.status}</span>
    <button type="button" class="button" onclick={() => onToggle(task.id)}>
      {isDone ? 'Move to To Do' : 'Mark as Done'}
    </button>
  </div>
</article>
