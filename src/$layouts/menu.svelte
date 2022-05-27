<script>

    import { navigateTo } from 'svelte-router-spa'
    import { UserStore } from '../stores'

    import Button from '../$components/button.svelte'

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigateTo('login')
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

<div class="nav">
    <div class="title"> Tareas de { $UserStore.name  }</div>
    <Button on:click={ logout } icon="person-running" />
</div>