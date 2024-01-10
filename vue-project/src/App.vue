<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from "./components/NavBar.vue";
</script>

<template>

  <header>
<nav-bar />
  </header>

  <RouterView />

</template>


<style scoped>

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

}

</style>
