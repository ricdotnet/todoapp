<!--

    This file is now deprecated!!!!!

-->



<template>
    
    <div class="w-2/3 md:w-1/2 lg:w-1/3 mx-auto text-center mt-10">

            <div class="mb-10 text-3xl font-bold">
                Login Page
            </div>

            <div v-if="showErrorMessage" class="p-5 bg-red-400 mb-5 rounded-md shadow font-semibold animate__bounceIn">
                {{ errorMessage }}
            </div>

        <form @submit.prevent="doLogin()">
            
            <div>
                <input id="username" @focus="resetInput()"
                    v-model="username" class="w-full p-5 bg-blue-600 bg-opacity-25 outline-none rounded-md shadow" placeholder="username">
            </div>

            <div>
                <input id="password" @focus="resetInput()"
                    type="password" v-model="password" class="mt-5 w-full p-5 bg-blue-600 bg-opacity-25 outline-none rounded-md shadow" placeholder="password">
            </div>

            <div class="text-center">
                <button class="mt-5 p-5 w-full font-bold 
                    bg-green-500
                    focus:outline-none
                    hover:bg-green-600
                    active:bg-green-700
                    shadow rounded-md">
                    
                        <span class="text-center">
                            <img class="-ml-2 mr-2" v-if="this.loading == true" src="https://thumbs.gfycat.com/AgonizingDiligentHapuka-small.gif" width="24px" />
                            Login
                        </span>
                    </button>
            </div>
        </form>

        <a href="/" class="cursor-pointer mt-5 p-2 w-10 flex bg-blue-400 text-center
                focus:outline-none hover:bg-blue-500 
                active:bg-blue-600 shadow rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>
        </a>

    </div>

</template>

<script>

//import axios from 'axios'

//const url = "https://ricr.dev/api/login.php";

export default {
    data() {

        return {
            username: '',
            password: '',
            isLoggedIn: '',
            loading: false,
            showErrorMessage: false,
            errorMessage: ""
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
            // this.loading = true;
            // console.log("loading")
            // if(this.username == "") {
            //     //document.getElementById("username").classList.add("border-red-500", "border");
                
            //     this.errorMessage = "Please enter a username."
            //     this.showErrorMessage = true;
            //     setTimeout(() => {
            //         this.showErrorMessage = false;
            //     }, 4000);

            // } else if (this.password == "") {
            //     //document.getElementById("password").classList.add("border-red-500", "border"); 
                
            //     this.errorMessage = "Please enter a password."
            //     this.showErrorMessage = true;
            //     setTimeout(() => {
            //         this.showErrorMessage = false;
            //     }, 4000);

            // } else {
            // axios.post(url, JSON.stringify({
            //         username: this.username,
            //         password: this.password
            //     }))
            //     .then(response => {
            //         //console.log(response.data)
            //         this.isLoggedIn = response.data;
            //         if(!this.isLoggedIn) {
            //             //document.getElementById("username").classList.add("border-red-500", "border");
            //             //document.getElementById("password").classList.add("border-red-500", "border"); 
                        
            //             this.errorMessage = "No user was found with those details."
            //             this.showErrorMessage = true;
            //             setTimeout(() => {
            //                 this.showErrorMessage = false;
            //             }, 4000);

            //         } else {
            //             this.setLoginCookie();
            //         }
            //     })
            //     //.then(response => (this.isLoggedIn = response.data))
            //     // .then(response => console.log(response.data))
            //     // .then(this.setLoginCookie())
            // }
            // this.loading = false;
        },

        /**
         * remove red borders
         */
        resetInput(){
            // document.getElementById("username").classList.remove("border-red-500", "border");
            // document.getElementById("password").classList.remove("border-red-500", "border"); 
        },

        /**
         * set a login cookie on local storage
         */
        setLoginCookie() {

            // console.log(this.isLoggedIn)
            // if(this.isLoggedIn) {
            //     localStorage.setItem("loggedIn", true);
            //     localStorage.setItem("username", this.username);
            //     window.location.href = '/'
            // } else {
            //     localStorage.setItem("loggedIn", false);
            //     localStorage.setItem("username", "");
            // }
        },

        /**
         * redirect to home page if user already logged in
         */
        checkLogin() {

            // axios.post(url, JSON.stringify({
            //         username: localStorage.getItem("username")
            //         //password: this.password
            //     }))
            //     .then(response => {
            //         if(response.data == "true") {
            //             window.location.href = '/';
            //         } else {
            //             localStorage.setItem("loggedIn", false);
            //             localStorage.setItem("username", "");
            //         }
            //     })

            // let loggedStatus = localStorage.getItem("loggedIn")
            // if(loggedStatus == 'true') {
            //     window.location.href = '/'
            // }

        }
    }
}
</script>
