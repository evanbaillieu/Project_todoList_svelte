<script>
    export let title;
    export let del;
    export let isDown;
    export let isCheck;
</script>



<div class="todo">
    <p class="text">{title}</p>
    <button class="icon" on:click|preventDefault={()=>console.log(todo.id)}>
        <DeleteIcon/>
    </button>
    <button class="icon">
        <DownIcon/>
    </button>
    <button class="icon">
        <CheckIcon />
    </button>
</div>