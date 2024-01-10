<script>

//OptionsAPI.vue
export default {
  //props
  props: {
    initialValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      value: this.initialValue
    };
  },
  //methods
  methods: {
    increase() {
      this.value++;
      this.$emit('valueChanged', this.value);
    },
    decrease() {
      this.value--;
      this.$emit('valueChanged', this.value);
    }
  }
};
</script>

<template>
  <div>
    <h2>Child (ChildToParentComponent)</h2>
    <p>Child Value: <span class="passesValue">{{ value }}</span></p>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<style scoped>
div {
  background-color: #2c3e50;
}
</style>