<script>

    import { navigateTo } from 'svelte-router-spa'
    import UsersService from '../$services/users.service'

    import InputPassword from '../$components/input.password.svelte'
    import Input from '../$components/input.svelte'
    import Form from '../$components/form.svelte'

    let data = {}
    let loading = false
    let error = null

    async function userSignup() {
        
        loading = true
        const resp = await UsersService.createUser(data)
        loading = false

        if(resp.error)
            return error = resp.error.message


        navigateTo('login')
    }

</script>

<Form on:submit={ userSignup } loading={ loading } >
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.firstName } label="Nombre" placeholder="Ingrese su nombre" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.lastName } label="Apellido" placeholder="Ingrese su apellido" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.email } label="Correo" placeholder="Ingrese su correo" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.phone } label="Número de Telefono" placeholder="Ingrese su celular" />
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

<!-- Nombre, Apellido, correo, contraseña, número, confirmarContraseña -->