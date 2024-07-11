<template>
  <div class="mx-[16%]">
    <div class="nav">
      <button class="text-lg">Home</button>
      <div class="flex gap-8 text-lg">
        <button>About</button>
        <button>Case Studies</button>
        <button>Team</button>
        <button>Jobs</button>
      </div>
      <button class="button text-lg">Contact</button>
    </div>
    <div class="hero bg-gradient-to-t from-white to-rose-100">
      <div class="px-8 pt-32">
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
        class="object-cover"
        src="~/assets/images/hero.jpg"
        alt="Discover One Big Soft"
      />
    </div>
    <div class="about flex flex-col justify-center items-center">
      <div
        class="flex justify-center font-sans text-4xl font-extrabold mt-48 mb-4"
      >
        Where all dreams come into place.
      </div>
      <div class="flex justify-center mx-[8%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore modi
        totam nihil repellendus iste corrupti odio ratione. Accusantium, vel
        illum a laboriosam esse quasi sit, fugit magni quia minima perspiciatis.
      </div>
      <button class="button my-4 w-32 flex justify-center mb-48">
        Book Now
      </button>
    </div>
    <div class="grid grid-cols-2 bg-gradient-to-t from-white to-rose-100">
      <img src="~/assets/images/hero.jpg" alt="Project Case Studies" />
      <div>
        <div class="mt-32 px-8 font-extrabold text-4xl">
          View Our Project Gallery
        </div>
        <div class="px-8 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          repellat aliquid dignissimos reprehenderit nulla nostrum accusamus
          quae ex obcaecati veritatis totam, voluptate incidunt adipisci
          doloribus nam suscipit quis, quia magni?
        </div>
        <button class="button mt-4 mx-8">View Gallery</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav {
  @apply max-w-full bg-rose-400 text-white font-bold font-sans shadow-lg p-4 flex justify-between;
}

.hero {
  @apply grid grid-cols-2;
}

.about {
  @apply bg-gradient-to-t from-rose-100 to-white;
}

.button {
  @apply rounded-lg p-2 text-lg text-slate-100 border-2 border-rose-600 bg-rose-500 hover:bg-blue-400 hover:border-blue-500 duration-300 font-sans font-semibold text-center items-center;
}
</style>
