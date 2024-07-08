<template>
  <div class="mx-[16%]">
    <header class="topbardesign grid grid-cols-6 p-4">
      <div class="leftside">
        <button>Home</button>
      </div>
      <div class="centerside">
        <button>About</button>
        <button>Case Studies</button>
        <button>Team</button>
        <button>Jobs</button>
      </div>
      <div class="rightside">
        <button>Contact</button>
      </div>
    </header>
    <section class="grid grid-cols-2">
      <div class="leftside bg-slate-400">
        <ul>
          <li class="w-auto font-extrabold">Programming, redefined.</li>
          <li class="w-auto">
            Discover the power of a professional team and how it enables you to
            build your dreams, without limitations.
          </li>
          <button>Schedule a Strategy Call</button>
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
.topbardesign {
  @apply max-w-full bg-rose-400 font-bold text-white font-sans shadow-lg;
}

.rightside {
  @apply flex col-span-1 justify-end;
}

.centerside {
  @apply flex col-span-4 justify-center gap-8;
}

.leftside {
  @apply flex col-span-1 justify-start;
}
</style>
