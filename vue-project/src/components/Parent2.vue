<script>
import ParentToChild from "@/components/ParentToChild.vue";

export default {
  components: {
    ParentToChild
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
    <h1>Parent <br>One Way Binding Component</h1>
    <button @click="increaseParent">Increase Parent</button>
    <button @click="decreaseParent">Decrease Parent</button>
    <p>Value sent to Child: <span class="passesValue">{{ sharedValue }}</span></p>
    <ParentToChild :valueFromParent="sharedValue" />
  </div>
</template>


<style>
.takesValue {
  color: green;
  font-weight: bolder;
  font-size: 1.2rem;
}

.passesValue {
  color: red;
  font-weight: bolder;
  font-size: 1.2rem;
}

</style>