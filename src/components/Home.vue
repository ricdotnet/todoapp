<template>
    <div class="text-center mt-10">
        <!-- Hello, :)<br>
        my name is {{ name }} and I am a software developer from {{ country }}. -->

        <div class="mb-10 text-3xl font-bold">
            ToDo List
        </div>

        <!-- todo form module -->
        <todo-form ref="todoform"></todo-form>

        <!-- todo box module -->
        <todo-box ref="todobox"></todo-box>

    </div>

</template>

<script>

//import axios from 'axios'
import TodoBox from './TodoBox.vue'
import TodoForm from './TodoForm.vue'

//const url = "https://ricr.dev/api/addtodo.php"

export default {
    components: { 
        TodoBox,
        TodoForm 
    },
    
    name: "Home",
    
    data () {
        return {
            name: "Ricardo Rocha",
            country: "Portugal",

            //title: "",
            //content: "",

            members: [],
            todos: []
        }
    },
    mounted: function() {

    },
    methods: {

    }
}

</script>