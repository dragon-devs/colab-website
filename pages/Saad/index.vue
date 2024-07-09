<template>
  <div class="mx-[16%]">
    <header
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
    </header>
    <section class="grid grid-cols-2">
      <div class="leftside bg-rose-100 p-6 pt-48">
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
      <div class="rightside">
        <img
          class="object-cover"
          src="~/assets/images/hero.jpg"
          alt="Discover One Big Soft"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.rightside {
  @apply flex col-span-1 justify-end;
}

.centerside {
  @apply flex col-span-4 justify-center gap-8;
}

.leftside {
  @apply flex col-span-1 justify-start;
}

.button {
  @apply rounded-lg p-2 text-lg text-slate-100 border-2 border-rose-600 bg-rose-500 hover:bg-blue-400 hover:border-blue-500 duration-300 font-sans font-semibold text-center items-center;
}
</style>
