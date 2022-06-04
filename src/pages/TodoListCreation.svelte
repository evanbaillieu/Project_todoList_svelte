<script>
    import { useNavigate } from "svelte-navigator";
    import { v4 as uuidv4 } from 'uuid';
    import { todoLists } from "../stores";

    const navigate = useNavigate();

    export let value;

    
    const savaTodoList = (e) => {
        const data = {
            id: uuidv4(),
            title: value,
            content: []
        }

        todoLists.update((currentTodoList) => {
          return [data, ...currentTodoList]
   
        });
        
        navigate("/");

    }
</script>

<main class="container page">
    <h1>Vous voulez créer une nouvelle liste de tâches ?</h1>
    
    <form class="form">
        <input class="input" type="text" bind:value={value} placeholder="Titre de la liste à créer" />
        <button class="btn" on:click|preventDefault={savaTodoList}>
            <span class="btn_text">créer</span>
        </button>
    </form>    
</main>
