<script>

    import { TaskStore } from '../stores'

    import MenuLayout from '../$layouts/menu.svelte'

    import Task from '../tasks/task.svelte'
    import Tasks from '../tasks/tasks.svelte'
    import TaskCreate from '../tasks/task.create.svelte'
    // import CourseUpdate from '../courses/course.update.svelte'
    // import CourseDelete from '../courses/course.delete.svelte'

    import Modal from '../$components/modal.svelte'

</script>

<!-- 

<Modal id="CourseUpdate">
    <CourseUpdate on:updated={ CourseStore.modalClose } />
</Modal>

<Modal id="CourseDelete">
    <CourseDelete on:deleted={ CourseStore.modalClose } />
</Modal>

-->
<Modal id="TaskCreate">
    <TaskCreate on:created={ TaskStore.modalClose } />
</Modal>
<Modal id="TaskRead">
    <Task />
</Modal>

<MenuLayout /> 
<div class="container">
    <br>
    <div class="columns">
        <div class="column">
            <Tasks />
        </div>
    </div>
</div>