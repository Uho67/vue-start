<template>
  <a v-if="isExternal" :href="to" target="_blank"><slot /></a>
  <router-link v-if="!isExternal" v-bind="$props"><slot /></router-link>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    ...RouterLink.props,
  },
  computed: {
    isExternal() {
      debugger;
      if (typeof this.to === "string" && this.to.startsWith("http")) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style scoped></style>
