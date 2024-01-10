<script>
import child2Way from "@/components/Child2Way.vue";

export default {
  components: {
    child2Way
  },
  data() {
    return {
      sharedValue: 0
    };
  },
  methods: {
    increaseParent() {
      this.sharedValue++;
    },
    decreaseParent() {
      this.sharedValue--;
    }
  }
};
</script>

<template>
  <div>
    <h1>Parent <br>2 Way Binding Component</h1>
    <p>Value from Child Component: {{ sharedValue }}</p>
    <button @click="increaseParent">Increase Shared Value</button>
    <button @click="decreaseParent">Decrease Shared Value</button>
  </div>
    <child2Way v-model="sharedValue" />


</template>


<style>
.theValue {
  color: red;
  font-weight: bolder;
  font-size: 1.2rem;
}
</style>