<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>
<script>
import { onBeforeRouteLeave } from "vue-router";

export default {
  setup() {
    onBeforeRouteLeave((to, from) => {
      const shouldLeave = window.confirm(
        "Are you sure you want to leave this page ? "
      );
      if (!shouldLeave) {
        return false;
      }
    });
  },
};
</script>
