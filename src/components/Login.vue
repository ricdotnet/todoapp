<template>
    
    <div class="mx-auto w-2/3 md:w-1/2 lg:w-1/2 mt-10 text-center">

        <form @submit.prevent="doLogin">
            <div class="mb-10 text-3xl font-bold">
                Login Page
            </div>
            
            <div>
                <input v-model="username" class="w-full p-5 bg-blue-600 bg-opacity-25 outline-none rounded-md shadow" placeholder="username">
            </div>

            <div>
                <input v-model="password" class="mt-5 w-full p-5 bg-blue-600 bg-opacity-25 outline-none rounded-md shadow" placeholder="password">
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
    methods: {
        doLogin() {
            if(this.username == "" || this.password == "") {
                console.log("enter user data")
            } else {
            axios.post(url, JSON.stringify({
                    username: this.username,
                    password: this.password
                }))
                .then(response => {
                    //console.log(response.data)
                    this.isLoggedIn = response.data;
                    this.setLoginCookie();
                })
                //.then(response => (this.isLoggedIn = response.data))
                // .then(response => console.log(response.data))
                // .then(this.setLoginCookie())
            }
        },
        setLoginCookie() {
            console.log(this.isLoggedIn)
            if(this.isLoggedIn) {
                localStorage.setItem("loggedIn", true);
                window.location.href = '/'
            } else {
                localStorage.setItem("loggedIn", false);
            }
        }
    }
}
</script>
