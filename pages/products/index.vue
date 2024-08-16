<template>
  <div class="grid grid-cols-4 gap-5 p-5">
    <div v-for="p in products">
      <SaadCard :product="p" />
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");

definePageMeta({
  layout: "saad",
});
</script>

<style scoped></style>
