<script>
    export let titre = "créer";
    export let color;
    export let bgcolor; 
</script>

<button class="btn"style={`color: ${color}; background-color: ${bgcolor}`}>
    <span class="btn_text">{titre}</span>
</button>

<style lang="text/scss">
    .btn{
        width: 8.125rem;
        height: 3.125rem;
        text-align: center;
        text-decoration: none;
        border: none;
        border-radius: 16px;
        background-color: #000A62;
        

        &_text{
            color: #FFFFFF;
        }
    }

</style>