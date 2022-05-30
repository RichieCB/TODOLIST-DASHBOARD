<script>

    import { createEventDispatcher } from 'svelte'
    import { SubtasksStore, TaskStore } from '../stores'

    import SubtasksService from '../$services/subtasks.service'

    import Form from '../$components/form.svelte'
    import Input from '../$components/input.svelte'

    const dispatch = createEventDispatcher()

    let data = {}
    let loading = false
    let error = null
    let showCancelar = false

    async function createSubtask() {
        
        data.taskId = $TaskStore._id
        loading = true
        const resp = await SubtasksService.createSubtask(data)
        loading = false

        if(resp.error)
            return error = resp.error.message

        SubtasksStore.append(resp.data)

        dispatch('created', resp.data)
    }

</script>

<Form on:submit={ createSubtask } { loading } {showCancelar}>

    <div class="columns">
        <div class="column">
            <Input bind:value={ data.name } label="Nombre de la subtarea" placeholder="Ingrese el nombre de la subtarea" icon="book" />
        </div>
    </div>
    
    {#if error}
        <div class="notification">{ error }</div>
    {/if}

</Form>