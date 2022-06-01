<script>

    import { navigateTo } from 'svelte-router-spa'
    import { UserStore } from '../stores'

    import Button from '../$components/button.svelte'

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigateTo('login')
    }
    function resume() {
        navigateTo('/')
    }

    function tasks() {
        navigateTo('tasks')
    }


</script>

<style>
    .nav {
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>


    <!-- <div class="columns is-centered">
        
            <div class="nav">
                <div class="title"> Tareas de { $UserStore.name  }</div>
                    <Button on:click={resume} icon="chart-line" />
                    <Button on:click={tasks} icon="list-check" />
                    <Button on:click={ logout } icon="person-running" />
            </div>

    </div> -->

    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
           
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
                <Button on:click={tasks} icon="list-check" />
            </a>
      
            <a class="navbar-item">
                <Button on:click={resume} icon="chart-line" />
            </a>
      
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
                <Button on:click={ logout } icon="person-running" />

            </div>
          </div>
        </div>
    </nav>
    <div class="center">
        <div class="title is-3 "> Tareas de { $UserStore.name  }</div>
    </div>
