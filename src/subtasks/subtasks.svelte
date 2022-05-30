<script>

    import { SubtasksStore, TaskStore } from '../stores'

    import SubtasksService from '../$services/subtasks.service'

    import Icon from '../$components/icon.svelte'
    let query = {}
    let loading = false

    getSubtasks()

    async function getSubtasks() {
        console.log($TaskStore)
        query.taskId = $TaskStore._id

        loading = true
        const resp = await SubtasksService.getSubtasks(query)
        loading = false

        if(resp.error)
            return error = resp.error.message

        SubtasksStore.set(resp.data.subtasks)
    }

    async function deleteSubtask(subtaskId) {
        loading = true
        const resp = await SubtasksService.deleteSubtask(subtaskId)
        loading = false

        if(resp.error)
            return error = resp.error.message

        SubtasksStore.remove(subtaskId)
    }

</script>


<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre Subtarea</th>
        </tr>
    </thead>
    <tbody>
        {#each $SubtasksStore as subtask, index}
            <tr>
                <td>{ index + 1 }</td>
                <td>{ subtask.name }</td>
                
                    <Icon on:click={() => deleteSubtask(subtask._id)} icon="ban" />
                
            </tr>
        {/each}
    </tbody>
</table>