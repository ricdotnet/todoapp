<template>
  <div>
    <div class="mx-auto w-2/3 md:w-1/2 lg:w-1/2">

      <transition-group
        enter-active-class="animate__bounceIn"
        leave-active-class="animate__bounceOut"
        tag="ul"
      >
        <li
          v-for="todo in todoList"
          :key="todo.created"
          class="
            card
            bg-black bg-opacity-30
            w-full
            mx-auto
            rounded-lg
            p-5
            mb-5
            overflow-ellipsis
          "
          v-bind:id="todo.created"
        >
          <div class="pb-5 border-b border-gray-600 uppercase font-bold">
            {{ todo.title }}
          </div>

          <div class="p-5 border-b border-gray-600">
            <div v-if="todo.complete === 'no'">
              <!-- <pre v-html="todo.content"></pre> -->

              <div
                :contenteditable="editMode"
                class="
                  transition
                  duration-300
                  whitespace-pre-line
                  font-mono
                  rounded
                "
                :class="{ 'bg-white text-black': editMode, '': editMode }"
                id="todoContent"
              >
                {{ todo.content }}
              </div>
            </div>
            <div v-else class="font-semibold">
              <div class="whitespace-pre-line font-mono line-through">
                {{ todo.content }}
              </div>
            </div>
          </div>

          <div class="w-full text-right mx-auto flex">
            <!-- done button -->
            <div v-if="todo.complete === 'no'">
              <button
                @click.prevent="
                  showConfirmComplete();
                  currentTodo = todo.created;
                "
                class="
                  pl-2
                  pr-2
                  pt-1
                  pb-1
                  mt-5
                  bg-green-500
                  focus:outline-none
                  hover:bg-green-600
                  active:bg-green-700
                  rounded-sm
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>

              <!-- modal box show -->
              <div
                v-show="confirmComplete"
                class="fixed bg-black w-full h-full top-0 left-0 bg-opacity-30"
              >
                <div
                  class="
                    w-auto
                    h-auto
                    p-10
                    bg-black
                    absolute
                    left-1/2
                    top-1/2
                    transform
                    -translate-x-1/2 -translate-y-1/2
                    bg-opacity-80
                    font-semibold
                    rounded-md
                  "
                >
                  <div class="mb-10">
                    Have you really completed this ToDo item?
                  </div>
                  <button
                    @click.prevent="
                      setComplete(), getTodos(), showConfirmComplete()
                    "
                    class="p-1 bg-green-600 mr-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </button>
                  <button
                    v-on:click="showConfirmComplete()"
                    class="p-1 bg-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <!-- modal box -->
            </div>
            <div v-else>
              <button
                disabled
                class="
                  pl-2
                  pr-2
                  pt-1
                  pb-1
                  mt-5
                  bg-gray-500
                  focus:outline-none
                  rounded-sm
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>

            <!-- edit button -->
<!--            <div>-->
<!--              <button-->
<!--                class="-->
<!--                  mt-5-->
<!--                  ml-3-->
<!--                  pl-2-->
<!--                  pr-2-->
<!--                  pt-1-->
<!--                  pb-1-->
<!--                  bg-blue-500-->
<!--                  focus:outline-none-->
<!--                  hover:bg-blue-600-->
<!--                  active:bg-blue-700-->
<!--                  rounded-sm-->
<!--                "-->
<!--                @click="-->
<!--                  editMode = !editMode;-->
<!--                  saveTodo(todo.created);-->
<!--                "-->
<!--              >-->
<!--                <span v-show="!editMode">-->
<!--                  <svg-->
<!--                    xmlns="http://www.w3.org/2000/svg"-->
<!--                    width="20px"-->
<!--                    fill="none"-->
<!--                    viewBox="0 0 24 24"-->
<!--                    stroke="currentColor"-->
<!--                  >-->
<!--                    <path-->
<!--                      stroke-linecap="round"-->
<!--                      stroke-linejoin="round"-->
<!--                      stroke-width="2"-->
<!--                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"-->
<!--                    />-->
<!--                  </svg>-->
<!--                </span>-->
<!--                <span class="flex" v-show="editMode">-->
<!--                  <span class="relative animate-ping">-->
<!--                    <svg-->
<!--                      xmlns="http://www.w3.org/2000/svg"-->
<!--                      width="20px"-->
<!--                      fill="none"-->
<!--                      viewBox="0 0 24 24"-->
<!--                      stroke="currentColor"-->
<!--                    >-->
<!--                      <path-->
<!--                        stroke-linecap="round"-->
<!--                        stroke-linejoin="round"-->
<!--                        stroke-width="2"-->
<!--                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"-->
<!--                      />-->
<!--                    </svg>-->
<!--                  </span>-->
<!--                  <span class="absolute">-->
<!--                    <svg-->
<!--                      xmlns="http://www.w3.org/2000/svg"-->
<!--                      width="20px"-->
<!--                      fill="none"-->
<!--                      viewBox="0 0 24 24"-->
<!--                      stroke="currentColor"-->
<!--                    >-->
<!--                      <path-->
<!--                        stroke-linecap="round"-->
<!--                        stroke-linejoin="round"-->
<!--                        stroke-width="2"-->
<!--                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"-->
<!--                      />-->
<!--                    </svg>-->
<!--                  </span>-->
<!--                </span>-->
<!--              </button>-->
<!--            </div>-->

            <!-- delete button -->
            <div>
              <button
                @click.prevent="removeTodo(todo.created)"
                class="
                  mt-5
                  ml-3
                  pl-2
                  pr-2
                  pt-1
                  pb-1
                  bg-red-500
                  focus:outline-none
                  hover:bg-red-600
                  active:bg-red-700
                  order-3
                  rounded-sm
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </li>
      </transition-group>

      <transition
        enter-active-class="animate__bounceIn"
        leave-active-class="animate__bounceOut"
      >
        <div
          v-if="todoList.length === 0"
          class="p-5 bg-red-200 bg-opacity-10 rounded-md shadow font-semibold"
        >
          Add your first ToDo.
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
      confirmComplete: false,
      showEditModal: false,
      editMode: false,
      currentTodo: '',
    };
  },
  mounted: function () {
    this.getTodos();
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.showEditModal = false;
        this.confirmComplete = false;
      }
    });
  },

  methods: {
    getTodos() {
      this.todoList = JSON.parse(localStorage.getItem('todos')) || [];
      this.todoList.sort((a, b) => b.created - a.created);
    },

    removeTodo(created) {
      this.todoList = this.todoList.filter(t => t.created !== created);
      localStorage.setItem('todos', JSON.stringify(this.todoList));

      this.getTodos();
    },

    setComplete() {
      this.todoList.map(t => {
        if (t.created === this.currentTodo) {
          t.complete = 'yes';
        }
      });

      localStorage.setItem('todos', JSON.stringify(this.todoList));
    },

    //toggle confirm complete
    showConfirmComplete() {
      this.confirmComplete = this.confirmComplete === false;
    },

    //saving todo
    async saveTodo(created) {
      const todoContent = document.getElementById("todoContent");
      if (!this.editMode) {
        this.todoList.map(t => {
          if (t.created === created) {
            t.content = todoContent.innerHTML.trim();
          }
        });
        localStorage.setItem('todos', JSON.stringify(this.todoList));
      }
    },
  },
  created() {
    this.$root.$refs.getTodos = this;
    // this.$root.$refs.todoList = this;
  },
};
</script>
