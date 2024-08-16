<template>
  <section>
    <div class="grid grid-cols-2 bg-gradient-to-t from-white to-rose-100">
      <div class="px-8 pt-32">
        <ul>
          <li class="text-5xl font-extrabold font-sans">
            Programming, redefined.
          </li>
          <li class="text-lg mt-4 mb-4 font-sans">
            Discover the power of a professional team and how it enables you to
            build your dreams, without limitations.
          </li>
          <button class="button">Book Now</button>
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
        illum a laboriosam esse quasi sit, fugit magni quia minima perspiciatis.
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
        <SaadScrollToSection
          targetId="contact-us"
          class="button flex mt-4 mx-8 w-52 text-center justify-center"
        >
          <template v-slot:contents>
            <div>Scroll to Contact Us</div>
          </template>
        </SaadScrollToSection>
      </div>
    </div>
  </section>
  <section>
    <div
      class="bg-gradient-to-t from-rose-100 to-white flex flex-col justify-center items-center"
    >
      <div
        class="flex justify-center font-sans text-4xl font-extrabold mt-48 mb-4"
      >
        Meet Our Team
      </div>
      <div class="flex justify-center mx-[8%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore modi
        totam nihil repellendus iste corrupti odio ratione. Accusantium, vel
        illum a laboriosam esse quasi sit, fugit magni quia minima perspiciatis.
      </div>
      <div class="button my-4 w-32 flex justify-center mb-48">View Team</div>
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
        <SaadScrollToSection
          targetId="contact-us"
          title="Can You Click?"
          class="button mt-4 mx-8 w-44"
        >
          <template v-slot:contents>View Our Gallery</template>
        </SaadScrollToSection>
      </div>
    </div>
  </section>
  <section>
    <div>
      <div
        class="bg-gradient-to-t from-rose-100 to-white flex flex-col justify-center items-center"
      >
        <div
          class="flex justify-center font-sans text-4xl font-extrabold mt-48 mb-4"
        >
          We Are Professionals.
        </div>
        <div class="flex justify-center mx-[8%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore modi
          totam nihil repellendus iste corrupti odio ratione. Accusantium, vel
          illum a laboriosam esse quasi sit, fugit magni quia minima
          perspiciatis.
        </div>
        <SaadButton
          title="Meet Our Team"
          class="mt-4 flex justify-center mb-48"
        >
        </SaadButton>
      </div>
    </div>
  </section>
  <section
    class="flex justify-center bg-gradient-to-b from-rose-100 to-white"
    id="call-us"
  >
    <div class="flex gap-20 bg-slate-900 p-36 rounded-xl">
      <div class="text-white font-sans text-3xl">
        A Free Audit Never Hurt Anyone.<br />
        <div class="text-xl mt-2">It has only ever helped.</div>
      </div>
      <SaadButton title="Call Now" class="h-14"></SaadButton>
    </div>
  </section>
  <section id="contact-us">
    <div class="bg-slate-900 rounded-xl text-white m-14 p-8">
      <p class="text-3xl text-center font-extrabold">Contact Us</p>
      <div>
        Name
        <input
          type="text"
          placeholder="Enter your name"
          class="w-full rounded-md h-10 p-2 text-black my-2"
        />
        Email
        <input
          type="text"
          placeholder="Enter your Email Address"
          class="w-full rounded-md h-10 p-2 text-black my-2"
        />
        Your Question
        <textarea
          placeholder="Enter your Query"
          class="w-full rounded-md h-36 p-2 text-black my-2 wordbreak:normal break-words overflow-y-hidden"
        ></textarea>
      </div>
      <div class="flex justify-center items-center mt-4">
        <SaadButton title="Submit" @click="buttonClick">Submit</SaadButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const buttonClick = () => {
  alert("clicked");
};

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

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
