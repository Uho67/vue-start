<template>
  <div>
    <h1>Protected Page</h1>
    <h2>Hello {{ userName }}</h2>
    <button class="btn" @click="logout">Logout</button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const userName = window.user;
const router = useRouter();
const logout = () => {
  window.user = null;
  router.push({
    name: "login",
  });
};
</script>
