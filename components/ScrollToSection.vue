<template>
  <div v-bind="$attrs" @click="scrollToSection">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, useAttrs } from "vue";

const props = defineProps({
  target: {
    type: String,
    required: true,
  },
});

const attrs = useAttrs();

const scrollToSection = () => {
  const section = document.querySelector(props.target);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
/* Add any styles you need for your component */
</style>
