<template>
  <div class="mx-auto w-2/3 md:w-1/2 lg:w-1/2">
    <div>
      <input
        id="title"
        v-model="title"
        class="
          p-5
          w-full
          bg-blue-300 bg-opacity-20
          focus:outline-none
          focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          mb-10
          resize-none
          rounded-lg
          shadow
        "
        placeholder="Title"
      />
    </div>

    <div>
      <textarea
        v-model="content"
        class="
          p-5
          w-full
          bg-blue-300 bg-opacity-20
          focus:outline-none
          focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          mb-5
          resize-none
          rounded-lg
          shadow
        "
        placeholder="Todo content here."
        rows="5"
      >
      </textarea>
    </div>

    <div class="text-right mx-auto">
      <button
        v-on:click="addTodo"
        class="
          p-2
          pl-5
          pr-5
          mb-10
          w-full
          rounded-md
          bg-green-500
          focus:outline-none
          hover:bg-green-600
          active:bg-green-700
        "
      >
        Add on the List
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    addTodo() {
      if (this.title === '') {
        alert('add a title');
      } else if (this.content === '') {
        alert('add the content');
      } else {
        const todo = {
          title: this.title,
          content: this.content,
          created: Date.now(),
          complete: 'no',
        }

        const todos = JSON.parse(localStorage.getItem('todos'));
        if (!todos) {
          localStorage.setItem('todos', JSON.stringify([todo]))
          this.resetFields();
          return;
        }

        localStorage.setItem('todos', JSON.stringify([...todos, todo]))
        this.resetFields()

        this.$root.$refs.getTodos.getTodos();
      }
    },
    resetFields() {
      this.title = '';
      this.content = '';
    },
  },
};
</script>
