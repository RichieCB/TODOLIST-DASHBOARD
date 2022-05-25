import { writable } from 'svelte/store'

export let UserStore = Model('User')


function Model(name, state = null) {

    const {subscribe, update, set} = writable(state)

    function modalCreate(data = null) {
        ModalStore.set(`${ name }Create`)
        if(data) set(data)
    }

    function modalRead(data = null) {
        ModalStore.set(`${ name }Read`)
        if(data) set(data)
    }

    function modalUpdate(data = null) {
        ModalStore.set(`${ name }Update`)
        if(data) set(data)

        console.log(`${ name }Update`, data)
    }

    function modalDelete(data = null) {
        ModalStore.set(`${ name }Delete`)
        if(data) set(data)
    }

    function modalOpen(modalName, data = null) {
        ModalStore(`${ name }${ modalName }`)
        if(date) set(data)
    }

    function modalClose() {
        ModalStore.close()
        set(null)
    }

    return {
        modalCreate,
        modalRead,
        modalUpdate,
        modalDelete,
        modalOpen,
        modalClose,
        subscribe,
        update,
        set
    }
}