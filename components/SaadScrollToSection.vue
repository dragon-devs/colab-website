<template>
  <div @click="scrollToElement">
    <slot name="contents"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  targetId: {
    type: String,
    required: true,
  },
});

const scrollToElement = () => {
  const element = document.getElementById(props.targetId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped></style>
