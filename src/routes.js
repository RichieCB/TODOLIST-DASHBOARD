import HomeView from './$views/home.view.svelte'
import LoginView from './$views/login.view.svelte'

import { UserStore } from './stores'

const routes = [
    {
        name: '/',
        component: HomeView,
        onlyIf: {guard: isLogin, redirect: 'login'}
    },
    {
        name: 'login',
        component: LoginView,
        onlyIf: {guard: needLogin, redirect: '/'}
    },
    // {
    //     name: 'tasks',
    //     component: TasksView,
    //     onlyIf: {guard: isLogin, redirect: 'login'}
    // },

]

function needLogin() {
    const token = localStorage.getItem('token')
    return !token
}

function isLogin() {
    
    const token = localStorage.getItem('token')

    if(token) {
        const user = localStorage.getItem('user')
        UserStore.set( JSON.parse(user) )
    } 

    return token
}


export { routes }