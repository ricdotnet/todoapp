<template>
    <div class="text-center mt-10">
        <!-- Hello, :)<br>
        my name is {{ name }} and I am a software developer from {{ country }}. -->

        <div class="mb-10 text-3xl font-bold">
            

            <div v-if="checkLogin() == 'true'">
                <span class="align-middle text-shadow">ToDo List</span>

                <button @click.prevent="doLogout()" class="ml-20 text-sm pl-5 pr-5 pt-2 pb-2 bg-red-500 focus:outline-none hover:bg-red-600 active:bg-red-700 align-middle shadow">
                    Logout
                </button>
            </div>
            <div v-else>
                <span class="align-middle text-shadow">Login or register to use the system.</span>
                <div class="text-sm font-thin mt-5">Use 'user' and 'password' to try it.</div>
            </div>
        </div>

        <div v-if="checkLogin() == 'true'">
            <!-- todo form module -->
            <todo-form ref="todoform"></todo-form>

            <!-- todo box module -->
            <todo-box ref="todobox"></todo-box>
        </div>

        <div v-else>
            <a href="/login" class="pl-5 pr-5 pt-2 pb-2 
                bg-purple-600
                hover:bg-purple-700
                active:bg-purple-800
                rounded-sm
                shadow">Login</a>

            <a href="#" class="ml-5 pl-5 pr-5 pt-2 pb-2 
                bg-green-600
                hover:bg-green-700
                active:bg-green-800
                rounded-sm
                shadow">Register</a>
        </div>


        <div class="font-mono mt-10 mb-10">
            made with VueJS => ricr.dev
        </div>

        <!-- <button @click="timer()" :loading="loading">

            <div v-if="this.loading == true">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

            <div v-if="this.loading == 'done'">loaded</div>

            <div v-if="!this.loading">click me</div>

        </button> -->

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
    props: {
        isLoggedIn: Boolean
    },

    name: "Home",
    loading: {
        current: false
    },
    
    data () {
        return {
            name: "Ricardo Rocha",
            country: "Portugal",
            loading: false

            //title: "",
            //content: "",
        }
    },
    mounted: function() {

        this.checkLogin()
        console.log(this.checkLogin())

        this.checkDomain()

    },
    methods: {

        /**
         * check logid status for form or buttons
         */
        checkLogin() {
            //console.log(localStorage.getItem("loggedIn"))
            return localStorage.getItem("loggedIn");
        },

        /**
         * logout logic
         */
        doLogout() {
            localStorage.setItem("loggedIn", false);
            localStorage.setItem("username", "")
            window.location.href = '/'
        },



        // timerR() {

        //     return new Promise(resolve => setTimeout(resolve, 2000))

        // },

        // async timer() {

        //     this.loading = true;
        //     await this.timerR();
        //     console.log("done")
        //     this.loading = "done";
        // }

    }
}

</script>