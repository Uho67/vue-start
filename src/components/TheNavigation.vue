<template>
  <div id="nav">
    <app-link :to="{ name: 'invoices' }">
      <h2>Test internal link</h2>
    </app-link>
    <app-link :to="externalLink">
      <h2>Test external link</h2>
    </app-link>
    <router-link to="/">
      <h2>Vue School</h2>
    </router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: {
          id: destination.id,
          slug: destination.slug,
        },
      }"
      >{{ destination.name }}</router-link
    >
    <router-link
      :to="{
        name: 'protected',
      }"
    >
      <h2>Protected</h2>
    </router-link>
  </div>
</template>
<script setup>
import AppLink from "@/components/AppLink.vue";
import sourceData from "@/data.json";
import { ref } from "vue";

const destinations = ref(sourceData.destinations);
const externalLink =
  "https://router.vuejs.org/guide/advanced/navigation-guards.html";
</script>
