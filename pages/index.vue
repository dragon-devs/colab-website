<template>
  <div class="grid sm:mx-[25%] grid-cols-1 gap-6 p-6">
    <NuxtLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.route"
      class="card-link group"
    >
      <div
        class="rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        :class="gradientClasses[index % gradientClasses.length]"
      >
        <h3 class="text-xl font-bold text-white mb-2">{{ link.title }}</h3>
        <p class="text-white text-opacity-80">{{ link.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const links = [
  { title: "Home", description: "Go to the homepage", route: "/" },
  { title: "DRH", description: "Testing pages", route: "/drh" },
  { title: "Saad", description: "Saad Portfolio Site", route: "/saad" },
  {
    title: "Saad Products",
    description: "Saad Products Site",
    route: "/products",
  },
  {
    title: "Ahmad",
    description: "Devsinc Business Website Clone",
    route: "/Ahmad",
  },
];

const gradientClasses = [
  "bg-gradient-to-br from-purple-600 to-blue-500",
  "bg-gradient-to-br from-green-400 to-blue-500",
  "bg-gradient-to-br from-indigo-500 to-purple-500",
  "bg-gradient-to-br from-pink-500 to-orange-400",
  "bg-gradient-to-br from-yellow-400 to-red-500",
];
</script>

<style scoped>
.card-link {
  text-decoration: none;
}
</style>
