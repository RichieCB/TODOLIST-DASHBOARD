<script>

    import Button from './button.svelte'

    export let loading = false
    
</script>

<form on:submit|preventDefault >
    
    <slot></slot>

    <Button text="Cancelar" />
    <Button type="submit" text="Confirmar" color="primary" isLoading={ loading } />
</form>