<script lang="ts">
  import TaskCard from './TaskCard.svelte';
  import type { Task } from '../lib/types';

  interface Props {
    title: string;
    tasks: Task[];
    onToggle: (id: number) => void;
  }

  let { title, tasks, onToggle }: Props = $props();
</script>

<section class="task-list">
  <h2 class="task-list-title">
    {title}
    <span class="task-list-count">({tasks.length})</span>
  </h2>

  {#if tasks.length === 0}
    <p class="empty-message">No tasks here.</p>
  {:else}
    <ul class="task-list-items">
      {#each tasks as task (task.id)}
        <li>
          <TaskCard {task} {onToggle} />
        </li>
      {/each}
    </ul>
  {/if}
</section>
