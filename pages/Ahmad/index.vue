<template>
  <div>
    <header class="flex justify-between items-center bg-white font-inter font-medium text-sm h-[74px]">
      <img src="@/assets/css/logo.png" alt="Company logo" class="h-20 ml-12" />
      <nav class="flex-grow">
        <div class="flex justify-center space-x-6 text-black">
          <button class="hover:text-[#0ebab1] duration-500">Case Studies</button>
          <button class="hover:text-[#0ebab1] duration-500">Services</button>
          <button class="hover:text-[#0ebab1] duration-500">About</button>
          <button class="hover:text-[#0ebab1] duration-500">Reviews</button>
          <button class="hover:text-[#0ebab1] duration-500">Careers</button>
          <button class="hover:text-[#0ebab1] duration-500">Learning</button>
        </div>
      </nav>
      <div>
        <button
          class="group flex justify-between items-center p-[27px] w-[18.4rem] text-white bg-[#0ebab1] hover:bg-[#042638] duration-500">
          <span>Schedule Strategy Call</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"
              class="size-4 rotate-45 transition:transform duration-500 ease-in-out group-hover:rotate-0 group-hover:text-teal-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 7L21 11M21 11L17 15M21 11H3" />
            </svg>
          </div>
        </button>
      </div>
    </header>

    <main>
      <div class="relative w-full h-[393px] overflow-hidden">
        <div class="absolute inset-0 bg-gray-700 opacity-15 bg-no-repeat bg-cover bg-blend-overlay"
          :style="{ backgroundImage: `url(${Image})` }"></div>

        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-[8px]">

          <h1 class="font-inter font-extrabold text-[#042638] relative">
            <div class="text-[4rem] inline-block relative mt-2">Be the market leader
              <span
                class="absolute left-[260px] bottom-3 w-[339px] h-[5px] bg-violet-500 transform rotate-1 rounded-full"></span>
            </div>
            <div class="text-[4rem] leading-none -mt-1">in your industry</div>
          </h1>

          <p class="font-inter font-medium tracking-tighter mt-2 max-w-5xl text-lg text-[#7987a1] leading-[21px]">
            Access 2,000+ passionate and experienced software engineers with skillsets in 100+ technologies,<br>
            in your timezone.
          </p>

          <div class="mt-4">
            <button
              class="text-white mr-4 py-3 px-4 border-white border-[2px] bg-[#0ebab1] rounded-full hover:bg-[#042638]">Schedule
              Strategy Call</button>
            <button
              class="text-black border-white border-[2px] py-3 px-4 rounded-full hover:bg-[#042638] hover:text-white duration-300">See
              our Work</button>
          </div>
        </div>
      </div>
    </main>

    <body>
      <div class="bg-[#0ebab1] border-black border-[10px]">01010</div>
    </body>

    <footer class="bg-[#042638] h-[550px] text-white">
      <div class="container mx-auto px-[171px] py-7 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-5">
          <div class="flex flex-col">
            <div class="font-extrabold text-xl">DEVSINC</div>
            <address class="mt-3 not-italic text-sm leading-5">18 S 2nd Street #120<br>
              San Jose, CA, 95113<br>
              United States</address>
              <a href="mailto:sales@devsinc.com" class="text-sm mt-3 underline">sales@devsinc.com</a>
              <img src="@/assets/css/diamond.png" alt="Company logo" class="mt-4 h-[50px] w-[60px]"/>
              <div class="flex mt-6">
                
              </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>



<script setup>
import Image from '@/assets/css/background.png'
</script>

<style></style>