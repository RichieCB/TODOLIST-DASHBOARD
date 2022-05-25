<script>

    import { createEventDispatcher } from 'svelte'

    import Icon from './icon.svelte'

    export let value = ''
    export let label = ''
    export let placeholder = ''
    export let color = ''
    export let size = ''

    export let icon = ''
    export let iconRight = ''

    export let isLoading = false
    export let isRounded = false
    export let isDisabled = false
    export let isReadonly = false

    const dispatch = createEventDispatcher()

    function onKeyup(event) {

        if(event.code === 'Enter')
            dispatch('enter', {value, message: 'el usuario presiono enter'})
            
    }

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
            on:keyup={ onKeyup }
            type="text"
            class="input is-{ color } is-{ size }"
            class:is-rounded={ isRounded }
            placeholder={ placeholder }
            disabled={ isDisabled }
            readonly={ isReadonly }
        >
    </div>
</div>