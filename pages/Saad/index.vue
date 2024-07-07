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
    <section class="flex flex-wrap justify-between">
      <div class="leftside flex-auto">
        <ul>
          <li>Hi My name is Saad</li>
          <li>I am a programmer</li>
        </ul>
      </div>
      <div class="rightside flex-auto">
        <div>There will be an image here</div>
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
