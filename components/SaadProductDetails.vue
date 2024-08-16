<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-10">
        <img
          :src="product.image"
          alt="product image"
          class="mx-auto my-10 img"
        />
      </div>
      <div class="p-10">
        <div class="text-4xl my-7">{{ product.title }}</div>
        <div class="text-xl my-7">Price - ${{ product.price }}</div>
        <div class="font-bold border-b-2 mb-4 pb-2">Product Description:</div>
        <div class="mb-7">{{ product.description }}</div>
        <button
          class="flex rounded-lg p-2 text-lg text-slate-100 border-2 border-rose-600 bg-rose-500 hover:bg-blue-400 hover:border-blue-500 duration-300 font-sans font-semibold text-center items-center"
        >
          <i class="material-icons p-1">add_shopping_cart</i
          ><span class="p-1">Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.card {
  @apply p-3 rounded-md bg-white shadow-md h-full;
}
.img {
  @apply max-w-[400px];
}
</style>
