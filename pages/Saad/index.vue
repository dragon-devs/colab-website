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
        <button class="button text-lg">Contact</button>
      </nav>
    </header>
    <section>
      <div class="grid grid-cols-2 bg-gradient-to-t from-white to-rose-100">
        <div class="px-8 pt-32">
          <ul>
            <li class="text-5xl font-extrabold font-sans">
              Programming, redefined.
            </li>
            <li class="text-lg mt-4 mb-4 font-sans">
              Discover the power of a professional team and how it enables you
              to build your dreams, without limitations.
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
    </section>
    <section>
      <div
        class="bg-gradient-to-t from-rose-100 to-white flex flex-col justify-center items-center"
      >
        <div
          class="flex justify-center font-sans text-4xl font-extrabold mt-48 mb-4"
        >
          Where all dreams come into place.
        </div>
        <div class="flex justify-center mx-[8%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore modi
          totam nihil repellendus iste corrupti odio ratione. Accusantium, vel
          illum a laboriosam esse quasi sit, fugit magni quia minima
          perspiciatis.
        </div>
        <button class="button my-4 w-32 flex justify-center mb-48">
          Book Now
        </button>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-2 bg-gradient-to-t from-white to-rose-100">
        <img src="~/assets/images/hero.jpg" alt="Project Case Studies" />
        <div>
          <div class="mt-24 px-8 font-extrabold text-4xl">
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
    </section>
    <footer
      class="grid grid-cols-3 gap-8 h-80 w-full bg-slate-900 text-white p-20"
    >
      <div>
        <div class="font-bold text-xl mb-4">Company Logo</div>
        <div>
          OBS is Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          dolore illo eaque commodi ad quaerat cupiditate modi quis eveniet.
        </div>
      </div>
      <ul>
        <li class="font-bold text-xl mb-4">Visit</li>
        <div class="hover_footer">About Us</div>
        <div class="hover_footer">Case Studies</div>
        <div class="hover_footer">Portfolio</div>
        <div class="hover_footer">Testimonials</div>
        <div class="hover_footer">Team</div>
      </ul>
      <ul>
        <li class="font-bold text-xl mb-4">Socials</li>
        <div class="hover_footer">Facebook</div>
        <div class="hover_footer">LinkedIn</div>
        <div class="hover_footer">Instagram</div>
        <div class="hover_footer">Twitter</div>
        <div class="hover_footer">YouTube</div>
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
  @apply rounded-lg p-2 text-lg text-slate-100 border-2 border-rose-600 bg-rose-500 hover:bg-blue-400 hover:border-blue-500 duration-300 font-sans font-semibold text-center items-center;
}
.hover_text {
  @apply hover:text-black duration-300 cursor-pointer;
}
.hover_footer {
  @apply hover:text-blue-400 duration-300 cursor-pointer;
}
</style>
