<template>
  <div class="mx-[16%]">
    <header>
      <nav
        class="max-w-full bg-rose-400 text-white font-bold font-sans shadow-lg p-4 flex justify-between"
      >
        <button class="text-lg hover_text">Home</button>
        <div class="flex gap-8 text-lg">
          <button class="hover_text">About</button>
          <button class="hover_text">Case Studies</button>
          <button class="hover_text">Team</button>
          <button class="hover_text">Jobs</button>
        </div>
        <SaadButton title="Contact Us"></SaadButton>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer
      class="grid grid-cols-3 gap-8 h-80 w-full bg-slate-900 text-white p-20"
    >
      <div>
        <div class="font-bold text-xl mb-4 cursor-pointer" @click="buttonClick">
          Company Logo
        </div>
        <div>
          OBS is Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          dolore illo eaque commodi ad quaerat cupiditate modi quis eveniet.
        </div>
      </div>
      <ul>
        <li class="font-bold text-xl mb-4">Visit</li>
        <li class="hover_footer" @click="buttonClick">About Us</li>
        <li class="hover_footer" @click="buttonClick">Case Studies</li>
        <li class="hover_footer" @click="buttonClick">Portfolio</li>
        <li class="hover_footer" @click="buttonClick">Testimonials</li>
        <li class="hover_footer" @click="buttonClick">Team</li>
      </ul>
      <ul>
        <li class="font-bold text-xl mb-4">Socials</li>
        <li class="hover_footer" @click="buttonClick">Facebook</li>
        <li class="hover_footer" @click="buttonClick">LinkedIn</li>
        <li class="hover_footer" @click="buttonClick">Instagram</li>
        <li class="hover_footer" @click="buttonClick">Twitter</li>
        <li class="hover_footer" @click="buttonClick">YouTube</li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.hover_text {
  @apply hover:text-black duration-300 cursor-pointer;
}
.hover_footer {
  @apply hover:text-blue-400 duration-300 cursor-pointer;
}
</style>
