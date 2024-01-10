<script setup lang="ts">
import { RouterLink } from 'vue-router';
import OptionVSComposition from "@/components/OptionVSComposition.vue";
</script>


<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="/playground">Playground</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="/childtoparent1w">ChildToParent 1W</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="/parenttochild1w">ParentToChild 1W</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="/2waybinding">Parent & Child 2W</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="/optionvscomposition">OptionVSComposition</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="/arrays">Arrays</RouterLink>
      </li>
    </ul>
  </nav>
</template>




<style scoped>

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2c3e50;
}

.navbar-list {
  list-style: none;
  padding: 0;
  display: flex;
}

.navbar-item {
  margin: 0 10px;
}
</style>