<script setup>

import Counter from "@/components/Counter.vue";
import TestComp from "@/components/TestComp.vue";


let rawHtml = "Hallo test123";
</script>

<template>
<div>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>


</div>

<div>

  <Counter />
  <TestComp /></div>
</template>





<style>

</style>
