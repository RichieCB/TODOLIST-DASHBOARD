<script>

    import { TasksStore, TaskStore } from '../stores'

    import TasksService from '../$services/tasks.service'

    import Button from '../$components/button.svelte'
    import Input from '../$components/input.svelte'
    import Icon from '../$components/icon.svelte'
    import Checkbox from '../$components/checkbox.svelte'

    let query = {}
    let loading = false
    let data = {}

    getTasks()

    async function getTasks() {

        loading = true
        const resp = await TasksService.getTasks(query)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.set(resp.data.tasks)
    }

    async function updateTask(task) {

        data.status = !task.status
        data.taskId = task._id
        console.log(data)
        const resp = await TasksService.updateTask(task._id, data)

        console.log(resp.data.status)

        if(resp.error)
            return error = resp.error.message

        TasksStore.replace(resp.data)

    }

</script>

<div class="columns">
    <div class="column">
        <Input on:enter={ getTasks } bind:value={ query.find } placeholder="Buscar" icon="search" />
    </div>
    <div class="column is-narrow">
        <Button on:click={() => TaskStore.modalCreate()} text="Agregar Tarea" color="info" />
    </div>
</div>

<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {#each $TasksStore as task, index}
            <tr>
                <td>{ index + 1 }</td>
                <td>
                    <Checkbox on:change={() => updateTask(task) } bind:isChecked={task.status} />
                </td>
                <td>{ task.name }</td>
                <td>{ task.category }</td>
                <td>{ task.description }</td>
                <td>{ task.date }</td>

                <td>
                    <Icon on:click={() => TaskStore.modalRead(task)} icon="eye" />
                    <Icon on:click={() => TaskStore.modalUpdate(task)} icon="pencil" />
                    <Icon on:click={() => TaskStore.modalDelete(task)} icon="ban" />
                </td>
            </tr>
        {/each}
    </tbody>
</table>