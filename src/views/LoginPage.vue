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
import { useRouter, useRoute } from "vue-router";

const userName = ref("");
const password = ref("");
const router = useRouter();
const route = useRoute();
const submitLogin = () => {
  window.user = userName.value;
  const newPath = route.query?.redirectTo ?? "protected";
  router.push({ name: newPath });
};
</script>
