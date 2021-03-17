<template>
    <div class="text-center mt-10">
        Hello, :)<br>
        my name is {{ name }} and I am a software developer from {{ country }}.

        <br><br>

        <div class="w-1/2 mx-auto">
            <input class="p-5 w-1/2 
                bg-blue-300 
                bg-opacity-20 
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400" v-model="text">

            <div>{{ text }}</div>

        </div>

    </div>

</template>

<script>

import axios from 'axios'

export default {
    name: "Home",

    data () {
        return {
            name: "Ricardo Rocha",
            country: "Portugal",

            members: [],
            todos: [],
            text: ''
        }
    },
    mounted: function() {

        this.connectDb()
        this.getData()

    },
    methods: {

        connectDb() {
            axios.get("http://ricr.test/api/retrievetodo.php")
                .then(response => this.todos = response.data)
        },

        getData() {
            axios.get("http://ricr.dev/api/members.php")
                .then(response => (this.members = response.data))
        }

    }
}

</script>