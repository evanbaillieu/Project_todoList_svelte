<script>
    import TodoList from "../components/TodoList.svelte";
    import { todoLists } from "../stores";
</script>

<div class="container page">   
    <h1>Liste de listes de tâches</h1>
    {#each  $todoLists as todoList (todoList.id)}
      <TodoList todoList={todoList } />
    {/each}
    {#if  $todoLists.length <= 0 }
       <p>Bravo :) Vous n'avez aucune liste de tâches en ce moment.</p>
    {/if}
</div>