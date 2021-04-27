<template>
    
    <div class="mx-auto w-2/3 md:w-1/2 lg:w-1/2">

        <div>
            <input id="title" v-model="title" class="p-5 w-full
                bg-blue-300 
                bg-opacity-20 
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-opacity-50
                mb-10
                resize-none
                rounded-lg
                shadow" placeholder="Title">
        </div>

        <div>
            <textarea v-model="content" class="p-5 w-full
                bg-blue-300 
                bg-opacity-20 
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-opacity-50
                mb-5
                resize-none
                rounded-lg
                shadow" placeholder="Todo content here." rows="5">
            </textarea>
        </div>

        <div class="text-right mx-auto">
            <button v-on:click="addTodo" class="p-2 pl-5 pr-5 mb-10 w-full
                rounded-md 
                bg-green-500
                focus:outline-none
                hover:bg-green-600
                active:bg-green-700">Add on the List</button>
        </div>   

    </div>

</template>

<script>
import axios from 'axios'

const url = "https://rrocha.uk/todoapi/addtodo.php"

export default {
    data () {
        return {
            title: "",
            content: ""
        }
    },
    methods: {

        addTodo() {
            if(this.title == "") {

                alert("add a title")
            
            } else if(this.content == "") {

                alert("add the content")

            } else {
                axios.post(url, JSON.stringify({
						title: this.title,
						content: this.content,
						userid: this.$auth.user.sub
					}))
						.then(response => {
							response ? console.log("added") : console.log("an error occurred")
                    this.resetFields()
                })
                // (error) => {
                //     console.log(error)
                // })

                //this.resetFields()
            }
        },
        resetFields() {
            this.title = "",
            this.content = ""

            this.$root.$refs.getTodos.getTodos()
        }
    }
}
</script>
