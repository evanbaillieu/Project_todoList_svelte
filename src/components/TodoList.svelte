<script>
    import { Link } from "svelte-navigator";
    import { deleteList } from "../helper/todo";
    import DeleteIcon from "../svg/delete.svg";
    import ViewIcon from "../svg/view.svg";
    export let todoList;
</script>

<div class="todo">
    <p class="text">{ todoList.title}</p>
    <button class="icon" on:click|preventDefault={()=>deleteList(todoList.id)}>
        <DeleteIcon/>
    </button>
    <Link to={"/todoDetail/"+ todoList.id} class="icon">  <ViewIcon/></Link>
</div>