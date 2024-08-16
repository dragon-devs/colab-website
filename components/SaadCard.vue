<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <SaadButton title="View Details" class="flex justify-center"></SaadButton>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.btn {
  @apply bg-[#12b488] text-white px-3 py-2 rounded-md text-sm;
}

.thumb {
  @apply max-h-[120px] max-w-[70%] m-auto;
}

.card {
  @apply p-3 rounded-md bg-white shadow-md h-full;
}
</style>
