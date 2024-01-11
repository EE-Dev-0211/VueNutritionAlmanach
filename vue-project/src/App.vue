<script lang="ts" setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <!--  <header>
      <nav-bar />
    </header>-->
  <!--  <RouterView />-->

  <div class="app">
    <Sidebar />

    <RouterView />
  </div>
</template>

<style Lang="scss">
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
<!--
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
-->
