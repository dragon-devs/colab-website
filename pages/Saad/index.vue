<template>
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
  <section>
    <div class="leftside border border-black">
      <ul class="border border-black">
        <li class="border border-black">Hi My name is Saad</li>
        <li class="border border-black">I am a programmer</li>
      </ul>
    </div>
    <div class="rightside border border-black">
      <div>There will be an image here</div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.topbardesign {
  @apply max-w-full bg-rose-400 font-bold text-white font-sans;
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
