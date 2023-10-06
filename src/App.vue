<template>
  <TheNavigation />
  <div class="container">
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation: TheNavigation,
  },
};
</script>

<style>
.my-custom-active-link {
  background: #4e6c71;
  border-bottom: 1px solid black;
}
</style>
