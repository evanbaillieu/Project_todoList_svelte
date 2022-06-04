<script>
    import { useNavigate } from "svelte-navigator";
import { writable } from "svelte/store";
    import { v4 as uuidv4 } from "uuid";
    import Task from "../components/Task.svelte";
    import { addTask,deleteList } from "../helper/todo";
    import { todoLists } from '../stores';
    import CopyActivateIcon from "../svg/copyActivate.svg"
    import CopyIcon from "../svg/copy.svg";
    import DeleteIcon from "../svg/delete.svg";
    
    export let id;
    export let value = ""; 
    export let navigate = useNavigate();
    export let todoList;
    let isCopy = false 
    
    todoLists.subscribe(state =>{
        todoList = state.find( item => item.id === id);
    });

    const saveTache = () =>{
        console.log(value.length)
        if(value.length <= 2) 
            return;

        let newTache = {
            id: uuidv4(),
            title: value,
            content: [],
            isCheck: false
        }
        value = ""
        addTask(id, newTache);
        
    }

    const del = () =>{
        navigate('/');
        deleteList(id);
   
    }

    const handleOnCopied = () => {
      navigator.clipboard.writeText(window.location.href);
      isCopy = true
      setTimeout(() => {
          isCopy = false;
      }, 3000);
    }
 

    
</script>

<div>
    <article class="container page headerTodo">  
        <h1 class="headerTodo_title">{todoList.title}</h1>
        <div class="headerTodo_toolsBar">
            <button class="icon" on:click|preventDefault={del}>
                <DeleteIcon/>
            </button>
            <button class="icon" on:click|preventDefault={handleOnCopied} aria-current={isCopy ? "page" : ""}>                   
                {#if isCopy}
                    <CopyActivateIcon/>
                {:else}
                    <CopyIcon/>
                {/if}
            </button>
        </div>
    </article>

    <article class="container page">
        <h1 class="title">Créer une nouvelle tâche</h1>
        <form class="form">
            <input class="input" type="text" bind:value={value} placeholder="Titre de la tâche" />
            <button class="btn" on:click|preventDefault={saveTache}>
                <span class="btn_text">créer</span>
            </button>
        </form>
    </article>

    <article class="container page">
        <h1>Liste des tâches</h1>        
        {#each todoList.content as task (task.id)}
            <Task task ={task} todoListId={todoList.id}/>
        {/each}
        {#if  todoList.content.length <= 0 }
         <p>Bravo :) Vous n'avez aucune tâche dans cette liste en ce moment.</p>
        {/if}
    </article>
</div>

<style lang="text/scss">
    .headerTodo{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &_title{
            padding-top: 0.5rem;
        }

        &_toolsBar{
            display: flex;
            flex-direction: row;

            .icon{
                margin-left: 1rem;
            }
        }
    }

</style>