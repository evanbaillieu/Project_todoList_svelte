<script>
    import { v4 as uuidv4 } from 'uuid';
    let value;

</script>

<input class="input" type="text" bind:value={value} placeholder="Titre de la liste à créer" />

<style lang="text/scss">
    .input{
       width: 37.5rem; 
       height: 3.125rem;
       background-color: #ECECEC;
       border: none;
       padding-left: 1rem;
       border-radius: 1rem; 
       margin-right: 3rem;
       margin-top: 1rem;
    }
</style>