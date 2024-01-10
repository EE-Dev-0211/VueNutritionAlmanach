<script>
export default {
  props: {
    modelValue: {
      type: Number,
      required: true
    }
  },
  methods: {
    increase() {
      this.$emit('update:modelValue', this.modelValue + 1);
    },
    decrease() {
      this.$emit('update:modelValue', this.modelValue - 1);
    }
  }
};
</script>

<template>
  <div>
    <h2>Child <br>2 Way Binding Component</h2>
    <p>Value: {{ modelValue }}</p>
    <button @click="increase">Increase Shared Value</button>
    <button @click="decrease">Decrease Shared Value</button>
  </div>
</template>

<style scoped>
div {
  background-color: #2c3e50;
}
</style>
