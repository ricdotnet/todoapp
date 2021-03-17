<template>

    <div>

        <div v-if="todoList.length != 0">
            
            <div v-for="(todo, key) in todoList" :key="key" 
                class="card bg-black bg-opacity-30 w-1/3 mx-auto rounded-lg p-5 mb-5 overflow-ellipsis">

                <div class="p-5 border-b border-gray-600 uppercase font-bold">{{ todo.title }}</div>

                <div class="p-5 border-b border-gray-600">{{ todo.content }}</div>

                <div class="p-5 text-right" @click="removeTodo(todo.id)">del</div>

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
    watched: function () {

        this.getTodos()

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
                .then(response => {
                    console.log(response)
                },
                (error) => {
                    console.log(error)
                })
            this.getTodos()
        }

    }

}
</script>
