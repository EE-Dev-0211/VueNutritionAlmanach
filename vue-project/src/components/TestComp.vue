<script setup>
import { ref } from 'vue'

const isActive = ref(true)

const url = "https://example.com";
const attributeName = "href";

let number = 0;
const message = "Dies ist eine Testnachricht."
const ok = true;
const id = 1;
function toggleActive(){
  isActive.value = !isActive.value
}
</script>

<template>
  <div class="testcomp">
    <button @click="toggleActive">TOGGLE</button>
    <span v-if="isActive">
      Aktive Komponente
    </span>

    <Button :disabled="isActive" @click="toggleActive">Test</Button>


    <br>
<!-- <a v-bind:[attributeName]="url"> ... </a>-->
    <!-- Dynamic attribute binding -->
    <a :[attributeName]="url">Link Text</a>

    <br>
    {{ number + 1 }}
    <br>
    {{ ok ? 'YES' : 'NO' }}
    <br>
    {{ message.split('').reverse().join('') }}
    <br>
    <div :id="`list-${id}`"></div>

    <br>
  </div>
</template>

<style scoped>
.testcomp {
  height: 500px;
  width: 500px;
  background-color: #2c3e50;
}
</style>
