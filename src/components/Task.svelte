<script>
import { v4 as uuidv4 } from "uuid";
import { addSubTask,delSubTask,delTask,toggleSubTaskStatus,toggleTaskStatus } from "../helper/todo";
import CheckIcon from "../svg/check.svg";
import DeleteIcon from "../svg/delete.svg";
import DownIcon from "../svg/down.svg";

  export let task;
  export let todoListId;
  let showSubTasks =false;
  let value = ""; 

  console.log(task);
  
  const saveSubTache = () =>{
        console.log(value.length)
        if(value.length <= 2) 
            return;

        let newTask = {
            id: uuidv4(),
            title: value,
            content: [],
            isCheck: false
        }
        value = ""
        addSubTask(todoListId, task.id, newTask);

    }

</script>

<div class="todo">
  <p class="text">{task.title}</p>
  <button class="icon" on:click|preventDefault={()=>delTask(todoListId, task.id)}>
      <DeleteIcon/>
  </button>
  <button class="icon" aria-current={showSubTasks ? "page" : ""}  on:click|preventDefault={()=>{showSubTasks=!showSubTasks}}>
      <DownIcon/>
  </button>
  <button class="icon" aria-current={task.isCheck ? "page" : ""} on:click|preventDefault = {()=>toggleTaskStatus(todoListId, task.id)}>
      <CheckIcon />
  </button>
</div>

{#if showSubTasks }

<article class="container page">
  <h1 class="title">Créer une nouvelle sous tâche</h1>
  <form class="form">
      <input class="input" type="text" bind:value={value} placeholder="Titre de la sous tâche" />
      <button class="btn" on:click|preventDefault={saveSubTache}>
          <span class="btn_text">créer</span>
      </button>
  </form>
  <h1 class="title">Liste des sous tâches</h1>
  {#each task.content as subTask (subTask.id)}
  <div class="todo">
    <p class="text">{subTask.title}</p>
    <button class="icon" on:click|preventDefault={()=>delSubTask(todoListId, task.id, subTask.id)}>
        <DeleteIcon/>
    </button>
    <button class="icon" aria-current={subTask.isCheck ? "page" : ""} on:click|preventDefault = {()=>toggleSubTaskStatus (todoListId, task.id, subTask.id)}>
        <CheckIcon />
    </button>
  </div>
  {/each}
  {#if  task.content.length <= 0 }
   <p>Bravo :) Vous n'avez aucune sous tâche pour cette tâches en ce moment.</p>
  {/if}

</article>
{/if}