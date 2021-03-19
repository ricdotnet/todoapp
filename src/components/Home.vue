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
    
    data () {
        return {
            name: "Ricardo Rocha",
            country: "Portugal",

            //title: "",
            //content: "",

            lastphoto: null
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

        checkDomain() {
            // fetch("https://domaincheck.httpapi.com/api/domains/available.json?auth-userid=463565&api-key=HP6VbCX1bjv1bn898fXnTVTpI6mnbMz6&domain-name=sdvsdvsdvsdv&tlds=net", {mode: "cors"})
            //     .then(response => console.log(response))


            var req = new XMLHttpRequest();
            req.open("GET", "https://domaincheck.httpapi.com/api/domains/available.json?auth-userid=463565&api-key=HP6VbCX1bjv1bn898fXnTVTpI6mnbMz6&domain-name=sdvsdvsdvsdv&tlds=net");
            req.send();
        }


// curl -X POST \
//   https://api.instagram.com/oauth/access_token \
//   -F client_id=303166954518505 \
//   -F client_secret=216772645dfca81cbb744b164cfe124f \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://ricr.dev/ \
//   -F code=AQCggbUcz_MtdxsRVc78fSiDB9ySTpzvxQU6tVc1z99ba_3-7aJEQzPcWb46hFUImYyu5CL0jd_vFNAfKulB-1XIRttecYY67N9DCkgISq1OJmNbWSxG1o4bgEZJm8-Pbf864KxjP7rFcaI3GqhlD8xH2ANGtMQmG7_B9u3OTCX3lcqLTBrOXiuQ4C5Vzhoc2t5QYDH9hQEhXbNFdiA1-Oa4ne-nSRmSr2Fe-C3l8fCaiA


    }
}

</script>