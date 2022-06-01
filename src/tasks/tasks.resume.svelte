<script>

    import TasksService from '../$services/tasks.service'

    let terminadas = 0
    let pendientes = 0
    let data = []

    getResume()
    async function getResume() {

       
        const resp = await TasksService.getResume()
        

        if(resp.error)
            return error = resp.error.message

        console.log(resp)

        data = resp.data
        console.log(data[0]._id)

    }
</script>

<div class="container">

    <div class="columns">
        <div class="column">
               
            {#each data  as card, index}
                {#if card._id == false}
                    <div class="card">
                        <div class="card-content">
                            <p class="title">
                                {card.total}
                            </p>
                            <p class="subtitle">
                                Tareas pendientes
                            </p>
                        </div>
                    </div>
                {/if}
                {#if card._id == true}
                    <div class="card">
                        <div class="card-content">
                            <p class="title">
                                {card.total}
                            </p>
                            <p class="subtitle">
                                Tareas completadas
                            </p>
                        </div>
                    </div>
                {/if}
                
            {/each}
               
                
        </div>
    </div>

</div>


