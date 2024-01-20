<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      ergebnis: 0,
    };
  },
  methods: {
    calculate() {
      this.ergebnis = this.value1+this.value2+this.value3;
      }
    },
    }
</script>


<template>
  <div>
    <h1>Dreisatzrechner</h1>

    <div>
      <label for="inputA">Größe A:</label>
      <input type="number" v-model="value1">
    </div>

    <div>
      <label for="inputB">Größe B:</label>
      <input type="number" v-model="value2">
    </div>

    <div>
      <label for="inputC">Größe C:</label>
      <input type="number" v-model="value3">
    </div>

    <div>
      <button @click="calculate">Berechnen</button>
    </div>

    <div v-if="ergebnis !== null">
      <p>Ergebnis: {{ this.ergebnis }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>