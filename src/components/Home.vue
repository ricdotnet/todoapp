<template>
  <div class="text-center mt-10">

    <div class="my-5 text-3xl">Your ToDo List</div>

      <div>
        <!-- todo form module -->
        <todo-form ref="todoform"></todo-form>

        <!-- todo box module -->
        <todo-box ref="todobox"></todo-box>
      </div>

    <Footer />
  </div>
</template>

<script>
//import axios from 'axios'
import TodoBox from "./TodoBox.vue";
import TodoForm from "./TodoForm.vue";
import Footer from "./Footer";

export default {
  name: "Home",

  components: {
    Footer,
    TodoBox,
    TodoForm,
  },

  data() {
    return {
      isDarkMode: true,
    };
  },

  beforeMount() {
    this.checkThemeOnLoad();
    this.hasAnyTodo();
  },

  methods: {
    hasAnyTodo() {
      const todos = localStorage.getItem('todos');
      if (!todos) localStorage.setItem('todos', JSON.stringify([]));
    },
    toggleDarkMode() {
      //console.log("before load")
      //document.body.style = "background-color: #000";
      let currentTheme = localStorage.getItem("theme");
      if (currentTheme == "dark") {
        document.body.style = "background-color: #fff";
        localStorage.setItem("theme", "light");
        this.isDarkMode = false;
      } else if (currentTheme == "light") {
        document.body.style = "background-color: #303952";
        localStorage.setItem("theme", "dark");
        this.isDarkMode = true;
      }
    },
    checkThemeOnLoad() {
      let currentTheme = localStorage.getItem("theme");
      if (currentTheme == "light") {
        document.body.style = "background-color: #fff";
        localStorage.setItem("theme", "light");
        this.isDarkMode = false;
      } else if (currentTheme == "dark") {
        document.body.style = "background-color: #303952";
        localStorage.setItem("theme", "dark");
        this.isDarkMode = true;
      } else if (currentTheme == null) {
        //set darkmode by default
        localStorage.setItem("theme", "dark");
      }
    },
  },
};
</script>
