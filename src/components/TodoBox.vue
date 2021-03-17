<template>

    <div>

        <div v-if="todoList.length != 0">
            
            <div v-for="(todo, key) in todoList" :key="key" 
                class="card bg-black bg-opacity-30 w-1/3 mx-auto rounded-lg p-5 mb-5 overflow-ellipsis">

                <div class="pb-5 border-b border-gray-600 uppercase font-bold">{{ todo.title }}</div>

                <div class="p-5 border-b border-gray-600"><pre>{{ todo.content }}</pre></div>

                <!-- <div class="p-5 text-right" @click="removeTodo(todo.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div> -->

                <div class="w-full text-right mx-auto">

                    <!-- done button -->
                    <button class="mr-3 pl-2 pr-2 pt-1 pb-1 
                        bg-green-500
                        focus:outline-none
                        hover:bg-green-600
                        active:bg-green-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                    
                    <!-- edit button -->
                    <button class="mr-3 pl-2 pr-2 pt-1 pb-1 
                        bg-blue-500
                        focus:outline-none
                        hover:bg-blue-600
                        active:bg-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>

                    <!-- delete button -->
                    <button @click="removeTodo(todo.id)" class="pl-2 pr-2 pt-1 pb-1 mt-5 
                        bg-red-500
                        focus:outline-none
                        hover:bg-red-600
                        active:bg-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>

                </div>

            </div>

        </div>
        <div v-else>
            no todos.
        </div>


    </div>

</template>

<script>
import axios from 'axios';

const url = "https://ricr.dev/api/removetodo.php"

export default {

    data: function () {
        return {
            todoList: []
        }
    },
    mounted: function () {

        this.getTodos()

    },
    methods: {

        getTodos() {
            axios.get("https://ricr.dev/api/retrievetodo.php")
                .then(response => (this.todoList = response.data))
        },
        removeTodo(id) {

            axios.post(url, JSON.stringify({
                id: id
            }))
                .then(this.getTodos())
                // .then(response => {
                //     console.log(response)
                //     this.getTodos() //pull todos from db
                // },
                // (error => {
                //     console.log(error)
                // }))
            //this.getTodos()
        }

    },
    created() {

        this.$root.$refs.oof = this;

    }

}
</script>
