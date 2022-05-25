<script>

    import { navigateTo } from 'svelte-router-spa'
    import UsersService from '../$services/users.service'

    import InputPassword from '../$components/input.password.svelte'
    import Input from '../$components/input.svelte'
    import Form from '../$components/form.svelte'

    let data = {}
    let loading = false
    let error = null

    async function userLogin() {
        
        loading = true
        const resp = await UsersService.userLogin(data)
        loading = false

        if(resp.error)
            return error = resp.error.message

        const token = resp.data.session.token
        localStorage.setItem('token', token)
        localStorage.setItem('user',  JSON.stringify(resp.data.user) )

        navigateTo('/')
    }

</script>

<Form on:submit={ userLogin } loading={ loading } >
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.email } label="Correo" placeholder="Ingrese correo" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <InputPassword bind:value={ data.password } />
        </div>
    </div>
    {#if error}
        <div class="notification">{ error }</div>
    {/if}
</Form>