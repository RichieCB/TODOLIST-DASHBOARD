<script>

    import Button from './button.svelte'

    export let loading = false
    export let showCancelar = true
    
</script>

<form on:submit|preventDefault >
    
    <slot></slot>

    {#if showCancelar}
        <Button text="Cancelar" />
    {/if}

    <Button type="submit" text="Confirmar" color="primary" isLoading={ loading } />
</form>