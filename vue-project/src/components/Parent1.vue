<script>
import ChildToParent from "@/components/ChildToParent.vue";

export default {
  components: {
    ChildToParent
  },
  data() {
    return {
      sharedValue: 0
    };
  },
  methods: {
    updateSharedValue(newValue) {
      this.sharedValue = newValue;
    }
  }
};
</script>

<template>
  <main>

    <h1>Parent  </h1>

    <p>One Way Binding <br>Value from Child (ChildToParentComponent): <span class="takesValue">{{ sharedValue }}</span></p>
    <ChildToParent :initialValue="sharedValue" @valueChanged="updateSharedValue" />
  </main>
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