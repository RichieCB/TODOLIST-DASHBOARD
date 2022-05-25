<script>

    import Icon from './icon.svelte'

    export let value = ''
    export let label = 'Contraseña'
    export let placeholder = 'Ingrese contraseña'
    export let color = ''
    export let size = ''

    export let icon = ''
    export let iconRight = ''

    export let isLoading = false
    export let isRounded = false
    export let isDisabled = false
    export let isReadonly = false

</script>

<div class="field">
    {#if label}
        <label for="" class="label">{ label }</label>
    {/if}
    <div 
        class="control" 
        class:is-loading={ isLoading } 
        class:has-icons-left={ icon }
        class:has-icons-right={ iconRight }
    >
        {#if icon}
            <Icon icon={icon} />
        {/if}
        <input 
            bind:value 
            type="password"  
            class="input is-{ color } is-{ size }" 
            class:is-rounded={ isRounded } 
            placeholder={ placeholder }
            disabled={ isDisabled }
            readonly={ isReadonly }
        >
    </div>
</div>