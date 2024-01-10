<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
count.value++
}

// lifecycle hooks
onMounted(() => {
console.log(`The initial count is ${count.value}.`)
})

</script>

<template>
  <div class="counter">
    <div> per Funktion:
    <button @click="increment">Count is: {{ count }}</button> </div>

    <div>Simpel:
    <button @click="count++">Count is: {{ count }}</button>  </div>
  </div>


</template>

<style scoped>
.counter {
  height: 500px;
  width: 500px;
  background-color: green;
/*  display: flex;
  justify-content: center;
  align-items: center;*/
  margin-top: 3rem;
}
</style>