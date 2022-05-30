<script>

    import { createEventDispatcher } from 'svelte'
    import { TasksStore, TaskStore } from '../stores'

    import TasksService from '../$services/tasks.service'

    import Form from '../$components/form.svelte'
    import Input from '../$components/input.svelte'

    const dispatch = createEventDispatcher()

    $: $TaskStore && updateData()

    let data = {}
    let loading = false
    let error = null

    async function updateTask() {

        loading = true
        const resp = await TasksService.updateTask($TaskStore._id, data)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.replace(resp.data)

        dispatch('updated', resp.data)
    }

    function updateData() {
        data = {
            name: $TaskStore.name,
            category: $TaskStore.category,
            description: $TaskStore.description,
            date: $TaskStore.date,
            label: $TaskStore.label,
        }
    }

</script>

<Form on:submit={ updateTask } { loading } >

    <div class="columns">
        <div class="column">
            <Input bind:value={ data.name } label="Nombre de la tarea" placeholder="Ingrese el nombre de la tarea" icon="book" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.category } label="Categoría" placeholder="Ingrese la categoria de la tarea" icon="clock" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.description } label="Descripción de la tarea" placeholder="Ingrese la descripción de la tarea" icon="file-signature" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.label } label="Etiqueta" placeholder="Ingrese la etiqueta de la tarea" icon="file-signature" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.date } label="Fecha de la tarea" placeholder="Ingrese la fecha de la tarea" icon="file-signature" />
        </div>
    </div>

    {#if error}
        <div class="notification">{ error }</div>
    {/if}


</Form>