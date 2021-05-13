<template>
    <div class="text-center mt-10">
        <!-- Hello, :)<br>
        my name is {{ name }} and I am a software developer from {{ country }}. -->

<!--         <button class="p-3 bg-black focus:outline-none" @click="toggleDarkMode()">{{ this.isDarkMode ? "dark" : "light" }}</button>-->

        <div v-if="$auth.loading">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto animate-spin" width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        </div>

        <div v-if="!$auth.loading">

            <div class="mb-10 text-3xl font-bold">

                <div v-if="$auth.isAuthenticated">
                    <span class="align-middle text-shadow">ToDo List</span>

                    <button @click.prevent="logout" class="rounded-sm ml-20 text-sm pl-5 pr-5 pt-2 pb-2 bg-red-500 focus:outline-none hover:bg-red-600 active:bg-red-700 align-middle shadow">
                        Logout
                    </button>
                </div>
                <div v-else>
                    <span class="align-middle text-shadow">Login or register to use the system.</span>
                    <div class="text-sm font-thin mt-5">To try this app use the following:<br>
					teste@test.com :: $why$is$this123</div>
                </div>
            </div>

            <div v-if="$auth.isAuthenticated">
                <!-- todo form module -->
                <todo-form ref="todoform"></todo-form>

                <!-- todo box module -->
                <todo-box ref="todobox"></todo-box>
            </div>

            <div v-else>
                <button @click="login" class="pl-5 pr-5 pt-2 pb-2 
                    bg-blue-500
                    hover:bg-blue-600
                    active:bg-blue-700
                    rounded-sm
                    shadow focus:outline-none">Login</button>

                <!-- <button @click="register" class="ml-5 pl-5 pr-5 pt-2 pb-2 
                    bg-green-600
                    hover:bg-green-700
                    active:bg-green-800
                    rounded-sm
                    shadow">Register</button> -->
            </div>

        </div>

        <div class="font-mono mt-10 mb-10">
            made with VueJS => ricr.dev
        </div>

    </div>

</template>

<script>

//import axios from 'axios'
import TodoBox from './TodoBox.vue'
import TodoForm from './TodoForm.vue'

export default {

    name: "Home",

    components: { 
        TodoBox,
        TodoForm 
    },
    
    data () {
        return {
            isDarkMode: true
        }
    },

    beforeMount () {

        this.checkThemeOnLoad();

    },

    methods: {

        login() {
            this.$auth.loginWithRedirect();
        },
        // Log the user out
        logout() {
            this.$auth.logout({
                returnTo: "http://localhost:8080/"
            });
        },

        toggleDarkMode() {
            //console.log("before load")
            //document.body.style = "background-color: #000";
            let currentTheme = localStorage.getItem("theme");
            if(currentTheme == "dark") {
                document.body.style = "background-color: #fff";
                localStorage.setItem("theme", "light");
                this.isDarkMode = false;
            } else if(currentTheme == "light") {
                document.body.style = "background-color: #303952";
                localStorage.setItem("theme", "dark");
                this.isDarkMode = true;
            }
        },
        checkThemeOnLoad() {
            let currentTheme = localStorage.getItem("theme");
            if(currentTheme == "light") {
                document.body.style = "background-color: #fff";
                localStorage.setItem("theme", "light");
                this.isDarkMode = false;
            } else if(currentTheme == "dark") {
                document.body.style = "background-color: #303952";
                localStorage.setItem("theme", "dark");
                this.isDarkMode = true;
            } else if(currentTheme == null) { //set darkmode by default
                localStorage.setItem("theme", "dark")
            }
        }

    }
}

</script>