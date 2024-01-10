<script>
export default {
  props: {
    valueFromParent: {
      type: Number,
      required: true
    }
  }
};
</script>


<template>
  <div>
    <h2>Child <br>(ParentToChild) One Way Binding Component</h2>
    <p>Value from Parent: <span class="takesValue">{{ valueFromParent }}</span></p>
  </div>
</template>

<style scoped>
div {
  background-color: #2c3e50;
}
</style>