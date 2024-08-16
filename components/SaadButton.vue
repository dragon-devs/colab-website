<template>
  <div class="button">{{ title }}</div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style scoped>
.button {
  @apply rounded-lg p-2 text-lg text-slate-100 border-2 border-rose-600 bg-rose-500 hover:bg-blue-400 hover:border-blue-500 duration-300 font-sans font-semibold text-center items-center;
}
</style>
