<script lang="ts">
  import type { NewTask, Priority } from '../lib/types';

  interface Props {
    onAdd: (task: NewTask) => void;
  }

  let { onAdd }: Props = $props();

  const priorities: Priority[] = ['Low', 'Medium', 'High'];

  let title = $state('');
  let description = $state('');
  let priority = $state<Priority>('Medium');

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    onAdd({
      title: trimmedTitle,
      description: description.trim(),
      priority,
    });

    title = '';
    description = '';
    priority = 'Medium';
  }
</script>

<form class="task-form" onsubmit={handleSubmit}>
  <h2>Add a task</h2>

  <label class="field">
    <span>Title</span>
    <input type="text" bind:value={title} placeholder="What needs to be done?" required />
  </label>

  <label class="field">
    <span>Description</span>
    <textarea bind:value={description} rows="3" placeholder="Add some details (optional)"></textarea>
  </label>

  <label class="field">
    <span>Priority</span>
    <select bind:value={priority}>
      {#each priorities as option (option)}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </label>

  <button type="submit" class="button button-primary">Add task</button>
</form>
