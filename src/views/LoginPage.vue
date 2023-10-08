<template>
  <div class="login">
    <form class="form">
      <label for="userName">User Name</label>
      <input type="text" v-model="userName" />
      <label for="password">Password</label>
      <input type="password" v-model="password" />
      <button class="btn" @click.prevent="submitLogin">Login</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const userName = ref("");
const password = ref("");
const router = useRouter();
const submitLogin = () => {
  debugger;
  window.user = userName.value;
  router.push({ name: "protected" });
};
</script>
