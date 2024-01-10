<script>
import OptionsAPI from "@/components/OptionsAPI.vue";
import CompositionAPI from "@/components/CompositionAPI.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {CompositionAPI, OptionsAPI}
})

</script>

<template>
  <OptionsAPI />
  <CompositionAPI />
</template>