<script>

    import { ModalStore } from '../stores'

    export let id = ''

    $: show = $ModalStore === id

    function closeModal(event) {
        ModalStore.close()
    }

    function onKeyup(event) {
        if(event.code === 'Escape')
            closeModal()
    }

    console.log('Modal ID', id)

</script>

<svelte:window on:keyup={onKeyup}/>
{#if show}
    <div class="modal is-active"  >
        <div on:click={ closeModal } class="modal-background"></div>
        <div class="modal-content">

            <div class="card">
                <div class="card-content">
                    <slot></slot>
                </div>
            </div>

        </div>
        <button on:click={ closeModal } class="modal-close is-large" aria-label="close"></button>
    </div>
{/if}