<template>
  <div class="text-center">
    <div v-if="!showSuccessMessage" class="text-3xl font-bold mt-20 mb-10">
      Register a new account.
    </div>
    <div v-else class="text-xl font-semi-bold mt-20 mb-10">
      Thanks for registering.
    </div>

    <div class="w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
      <div
        v-if="showErrorMessage"
        class="
          p-5
          bg-red-400
          mb-5
          rounded-md
          shadow
          font-semibold
          animate__bounceIn
        "
      >
        {{ errorMessage }}
      </div>
      <div v-if="showSuccessMessage" class="text-center animate__bounceIn">
        <div class="p-5 bg-indigo-500 mb-5 rounded-md shadow font-semibold">
          Account registered with success.
        </div>
        <a
          href="/login"
          class="
            p-5
            w-full
            flex
            bg-green-500
            hover:bg-green-600
            active:bg-green-700
            rounded-md
            shadow
          "
          >Login</a
        >
      </div>

      <form v-if="!showSuccessMessage" @submit.prevent="doRegister()">
        <input
          v-model="username"
          class="
            w-full
            mb-5
            p-5
            bg-blue-600 bg-opacity-25
            outline-none
            rounded-md
            shadow
          "
          placeholder="username"
          autocomplete="off"
        />
        <input
          v-model="email"
          class="
            w-full
            mb-5
            p-5
            bg-blue-600 bg-opacity-25
            outline-none
            rounded-md
            shadow
          "
          placeholder="email"
          autocomplete="false"
        />
        <input
          v-model="password"
          class="
            w-full
            mb-5
            p-5
            bg-blue-600 bg-opacity-25
            outline-none
            rounded-md
            shadow
          "
          placeholder="password"
          type="password"
          autocomplete="off"
        />

        <button
          class="
            p-5
            w-full
            bg-green-500
            font-bold
            hover:bg-green-600
            active:bg-green-700
            focus:outline-none
            shadow
            rounded-md
          "
        >
          Register
        </button>

        <a
          href="/"
          class="
            cursor-pointer
            mt-5
            p-2
            w-10
            flex
            bg-blue-400
            text-center
            focus:outline-none
            hover:bg-blue-500
            active:bg-blue-600
            shadow
            rounded-md
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const url = `${this.$api}/todoapp.php?action=register`;

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      showErrorMessage: false,
      errorMessage: "",
      showSuccessMessage: false,
    };
  },
  methods: {
    async doRegister() {
      if (this.username == "") {
        this.errorMessage = "Please enter a username.";
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 4000);
      } else if (this.email == "") {
        this.errorMessage = "Please enter an email.";
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 4000);
      } else if (this.password == "") {
        this.errorMessage = "Please enter a password.";
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 4000);
      } else {
        /**
         * api get request to enter a new user into the database
         */
        await axios
          .get(
            url +
              "&username=" +
              this.username +
              "&password=" +
              this.password +
              "&email=" +
              this.email
          )
          .then((response) => {
            /**
             * response for existing username
             */
            if (response.data == "username_exists") {
              this.errorMessage = "That username already exists.";
              this.showErrorMessage = true;
              setTimeout(() => {
                this.showErrorMessage = false;
              }, 4000);
            } else if (response.data == "email_exists") {
              this.errorMessage = "That email already exists.";
              this.showErrorMessage = true;
              setTimeout(() => {
                this.showErrorMessage = false;
              }, 4000);
            } else if (response.data == "user_created") {
              this.showSuccessMessage = true;
              setTimeout(() => {
                this.showErrorMessage = false;
                window.location.href = "/";
              }, 10000);
            } else {
              this.errorMessage =
                "Something went wrong here. Please refresh the page.";
              this.showErrorMessage = true;
            }
          });
      }
    },
  },
};
</script>
