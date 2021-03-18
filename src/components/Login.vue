<template>
    
    <div class="mx-auto w-2/3 md:w-1/2 lg:w-1/2 mt-10 text-center">

        <form @submit.prevent="doLogin">
            <div class="mb-10 text-3xl font-bold">
                Login Page
            </div>
            
            <div>
                <input id="username" @focus="resetInput()"
                    v-model="username" class="w-full p-5 bg-blue-600 bg-opacity-25 outline-none rounded-md shadow" placeholder="username">
            </div>

            <div>
                <input id="password" @focus="resetInput()"
                    type="password" v-model="password" class="mt-5 w-full p-5 bg-blue-600 bg-opacity-25 outline-none rounded-md shadow" placeholder="password">
            </div>

            <div>
                <button class="mt-5 pl-5 pr-5 pt-2 pb-2 
                    bg-green-500
                    focus:outline-none
                    hover:bg-green-600
                    active:bg-green-700
                    shadow">Login</button>
            </div>
        </form>

    </div>

</template>

<script>

import axios from 'axios'

const url = "https://ricr.dev/api/login.php"

export default {
    data() {

        return {
            username: '',
            password: '',
            isLoggedIn: ''
        }

    },
    mounted() {

        this.checkLogin()

    },
    methods: {

        /**
         * do login logic
         */
        doLogin() {
            if(this.username == "") {
                document.getElementById("username").classList.add("border-red-500", "border");
            } else if (this.password == "") {
                document.getElementById("password").classList.add("border-red-500", "border"); 
            } else {
            axios.post(url, JSON.stringify({
                    username: this.username,
                    password: this.password
                }))
                .then(response => {
                    //console.log(response.data)
                    this.isLoggedIn = response.data;
                    if(!this.isLoggedIn) {
                        document.getElementById("username").classList.add("border-red-500", "border");
                        document.getElementById("password").classList.add("border-red-500", "border"); 
                    } else {
                        this.setLoginCookie();
                    }
                })
                //.then(response => (this.isLoggedIn = response.data))
                // .then(response => console.log(response.data))
                // .then(this.setLoginCookie())
            }
        },

        /**
         * remove red borders
         */
        resetInput(){
            document.getElementById("username").classList.remove("border-red-500", "border");
            document.getElementById("password").classList.remove("border-red-500", "border"); 
        },

        /**
         * set a login cookie on local storage
         */
        setLoginCookie() {
            console.log(this.isLoggedIn)
            if(this.isLoggedIn) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username", this.username);
                window.location.href = '/'
            } else {
                localStorage.setItem("loggedIn", false);
                localStorage.setItem("username", "");
            }
        },

        /**
         * redirect to home page if user already logged in
         */
        checkLogin() {
            let loggedStatus = localStorage.getItem("loggedIn")
            if(loggedStatus == 'true') {
                window.location.href = '/'
            }

        }
    }
}
</script>
