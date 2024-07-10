<template>

  <div class="mx-[16%]">
    <nav
      class="max-w-full bg-rose-400 text-white font-bold font-sans shadow-lg p-4 flex justify-between"
    >
      <button class="text-lg">Home</button>
      <div class="flex gap-8 text-lg">
        <button>About</button>
        <button>Case Studies</button>
        <button>Team</button>
        <button>Jobs</button>
      </div>
      <button class="button text-lg">Contact</button>

    </nav>
    <hero class="grid grid-cols-2">
      <div class="bg-gradient-to-t from-white to-rose-100 p-6 pt-48">
        <ul>
          <li class="text-5xl font-extrabold font-sans">
            Programming, redefined.
          </li>
          <li class="text-lg mt-4 mb-4 font-sans">
            Discover the power of a professional team and how it enables you to
            build your dreams, without limitations.
          </li>
          <button class="button">Schedule a Strategy Call</button>
        </ul>
      </div>

      <img
        class="object-cover bg-rose-100 bg-gradient-to-tr"
        src="~/assets/images/hero.jpg"
        alt="Discover One Big Soft"
      />
    </hero>
    <about
      class="grid grid-cols-2 bg-gradient-to-t from-rose-100 to-white h-80"
    >
      <div></div>
      <div></div>
    </about>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.button {
  @apply rounded-lg p-2 text-lg text-slate-100 border-2 border-rose-600 bg-rose-500 hover:bg-blue-400 hover:border-blue-500 duration-300 font-sans font-semibold text-center items-center;
}
</style>
