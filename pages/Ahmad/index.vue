<template>

  <div class="bg-white">
    <header class="flex justify-between items-center bg-white font-inter h-[92px]">


 <img src="@/assets/css/logo.png" alt="Company logo" class="h-20 ml-12" />
      <nav class="flex-grow">
        <div class="flex justify-center -pl-[293px] space-x-[39px] text-black text-lg">
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
          class="group flex justify-between items-center -mt-[1px] p-[32px] w-[23rem] text-white text-lg  bg-[#0ebab1] hover:bg-[#042638] duration-500">
          <span>Schedule Strategy Call</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"
              class="size-5 rotate-45 transition:transform duration-500 ease-in-out group-hover:rotate-0 group-hover:text-teal-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 7L21 11M21 11L17 15M21 11H3" />
            </svg>
          </div>
        </button>
      </div>
    </header>

    <main>
      <div class="relative w-full h-[493px] overflow-hidden">
        <div class="absolute inset-0 bg-gray-700 opacity-15 bg-no-repeat bg-cover bg-blend-overlay"
          :style="{ backgroundImage: `url(${Image})` }"></div>

        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-[8px]">

          <h1 class="font-inter font-black text-[#042638] relative">
            <div class="text-[5.1rem] inline-block relative -mt-5">Be the market leader
              <span
                class="absolute left-[325px] bottom-4 w-[424px] h-[6px] bg-violet-500 transform rotate-1 rounded-full"></span>
            </div>
            <div class="text-[5rem] leading-none">in your industry</div>
          </h1>

          <p class="font-inter font-medium tracking-tight mt-6 max-w-5xl text-2xl text-[#7987a1] leading-[33px]">
            Access 2,000+ passionate and experienced software engineers with skillsets in 100+ technologies,<br>
            in your timezone.
          </p>

          <div class="mt-6 text-base">
            <button
              class="text-white mr-4 py-5 px-8 border-white border-[2px] bg-[#0ebab1] rounded-full hover:bg-[#042638]">Schedule
              Free Strategy Call</button>
            <button
              class="text-black border-white border-[2px] py-5 px-7 rounded-full hover:bg-[#042638] hover:text-white duration-300">See
              our Work</button>
          </div>
        </div>
      </div>
      <div class="slider-container w-[64%] ml-[18%] overflow-hidden">
        <div class="slider-content flex p-3" ref="sliderContent">
          <div class="flex justify-center items-center whitespace-nowrap">
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item1.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item2.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item3.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item4.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item5.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item6.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item7.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item8.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item9.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item10.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item11.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item12.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="img-container"><img class="object-contain w-full h-full" src="assets/css/item13.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <body>
      <div class="container mx-auto max-w-[60%] font-inter text-[#042638]">
        <h1 class="text-[#042638] text-[43px] tracking-tighter font-bold text-center mt-[50px] mb-3">From Idea to Completion, we bring Full-Stack Expertise</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-[32px]">

          <div class="p-6 flex relative group overflow-hidden">
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#7987a1] group-hover:bg--[#042638] transition-colors duration-300">
            </div>
            <div
              class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#042638] group-hover:w-full transition-all duration-700 ease-out">
            </div>
            <div class="text-[#0ebab1] pt-[45px] absolute left-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
                </path>
              </svg>
            </div>
            <div class="pl-[36px]">
              <h2
                class="text-[2rem] font-bold mb-2 tracking-tighter group-hover:text-[#0ebab1] duration-500 ease-linear">
                Web Development</h2>
              <p class="text-[#7987a1] text-[1.1rem] mt-[15px] mb-[22px]">Deliver high-quality web development, design
                and
                functionality tailored for your business.</p>
            </div>
          </div>

          <div class="p-6 flex relative group overflow-hidden">
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#7987a1] group-hover:bg--[#042638] transition-colors duration-300">
            </div>
            <div
              class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#042638] group-hover:w-full transition-all duration-300 ease-out">
            </div>
            <div class="text-[#0ebab1] mr-[28px] absolute pt-[45px] left-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
            </div>
            <div class="pl-[36px]">
              <h2
                class="text-[2rem] font-bold mb-2 tracking-tighter group-hover:text-[#0ebab1] duration-500 ease-linear">
                Digital Transformation</h2>
              <p class="text-[#7987a1] text-[1.1rem] mt-[15px] mb-[22px]">Digitize, automate and accelerate your
                business operations through digital
                transformation.</p>
            </div>
          </div>

          <div class="flex relative group overflow-hidden mt-[2px]">
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#7987a1] group-hover:bg--[#042638] transition-colors duration-300">
            </div>
            <div
              class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#042638] group-hover:w-full transition-all duration-300 ease-out">
            </div>
            <div class="text-[#0ebab1] mr-[28px] pt-[45px]">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
            </div>
            <div>
              <h2
                class="text-[2rem] font-bold mb-2 tracking-tighter group-hover:text-[#0ebab1] duration-500 ease-linear">
                Generative AI</h2>
              <p class="text-[#7987a1] text-[1.1rem] mt-[15px] mb-[42px]">Harness Generative AI and new technologies to
                innovate, automate, and stay ahead of
                the competition.</p>
            </div>
          </div>

          <div class="flex relative group overflow-hidden mt-[2px]">
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#7987a1] group-hover:bg--[#042638] transition-colors duration-300">
            </div>
            <div
              class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#042638] group-hover:w-full transition-all duration-300 ease-out">
            </div>
            <div class="text-[#0ebab1] mr-[28px] pt-[45px]">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h2
                class="text-[2rem] font-bold mb-2 tracking-tighter group-hover:text-[#0ebab1] duration-500 ease-linear">
                Mobile App Development</h2>
              <p class="text-[#7987a1] text-[1.1rem] mt-[15px] mb-[42px]">Make your mobile app stand out from the crowd
                with Devsinc's Android and iOS
                development.</p>
            </div>
          </div>

          <div class="flex relative group overflow-hidden mt-[2px]">
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#7987a1] group-hover:bg--[#042638] transition-colors duration-300">
            </div>
            <div
              class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#042638] group-hover:w-full transition-all duration-300 ease-out">
            </div>
            <div class="text-[#0ebab1] mr-[28px] pt-[45px]">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <div>
              <h2
                class="text-[2rem] font-bold mb-2 tracking-tighter group-hover:text-[#0ebab1] duration-500 ease-linear">
                Custom Development</h2>
              <p class="text-[#7987a1] text-[1.1rem] mt-[15px] mb-[42px]">Get custom software perfectly built for your
                business to boost productivity and
                efficiency.</p>
            </div>
          </div>

          <div class="flex relative group overflow-hidden mt-2px">
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#7987a1] group-hover:bg--[#042638] transition-colors duration-300">
            </div>
            <div
              class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#042638] group-hover:w-full transition-all duration-300 ease-out">
            </div>
            <div class="text-[#0ebab1] mr-[28px] pt-[45px]">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                </path>
              </svg>
            </div>
            <div>
              <h2
                class="text-[2rem] font-bold mb-2 tracking-tighter group-hover:text-[#0ebab1] duration-500 ease-linear">
                Cybersecurity Solutions</h2>
              <p class="text-[#7987a1] text-[1.1rem] mt-[15px] mb-[42px]">Keep your digital assets safe and protect your
                business from threats with our
                cybersecurity solutions.</p>
            </div>
          </div>

          <div class="flex relative group overflow-hidden mt-[2px]">
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#7987a1] group-hover:bg--[#042638] transition-colors duration-300">
            </div>
            <div
              class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#042638] group-hover:w-full transition-all duration-300 ease-out">
            </div>
            <div class="text-[#0ebab1] mr-[28px] pt-[45px]">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                </path>
              </svg>
            </div>
            <div>
              <h2
                class="text-[2rem] font-bold mb-2 tracking-tighter group-hover:text-[#0ebab1] duration-500 ease-linear">
                Dynamics 365 ERP</h2>
              <p class="text-[#7987a1] text-[1.1rem] mt-[15px] mb-[42px]">Drive efficiency and growth with tailored and
                custom Microsoft Dynamics 365
                solutions.</p>
            </div>
          </div>

          <div class="flex relative group overflow-hidden mt-[2px]">
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-[#7987a1] group-hover:bg--[#042638] transition-colors duration-300">
            </div>
            <div
              class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#042638] group-hover:w-full transition-all duration-300 ease-out">
            </div>
            <div class="text-[#0ebab1] mr-[28px] pt-[45px]">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4">
                </path>
              </svg>
            </div>
            <div>
              <h2
                class="text-[2rem] font-bold mb-2 tracking-tighter group-hover:text-[#0ebab1] duration-500 ease-linear">
                QA Testing & Automation</h2>
              <p class="text-[#7987a1] text-[1.1rem] mt-[15px] mb-[42px]">Improve your software's reliability with our
                comprehensive QA testing services.</p>
            </div>
          </div>

        </div>
      </div>
    </body>

    <footer class="bg-[#042638] h-[690px] text-white font-inter">
      <div class="container mx-auto px-[50px] py-10 max-w-7xl pb-0 mb-0 border-b-0">
        <div class="grid grid-cols-1 md:grid-cols-5">
          <div class="flex flex-col">
            <div class="font-extrabold text-2xl">DEVSINC</div>
            <address class="mt-5 not-italic leading-6">18 S 2nd Street #120<br>
              San Jose, CA, 95113<br>
              United States</address>
            <a href="mailto:sales@devsinc.com" class="mt-3 underline">sales@devsinc.com</a>
            <img src="@/assets/css/diamond.png" alt="Company logo" class="mt-4 h-[60px] w-[70px]" />

            <div class="flex items-center mt-12 gap-7">

              <a class="text-white hover:text-[#0ebab1]" aria-label="Visit TrendyMinds Facebook" href=""
                target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-5">
                  <path fill="currentColor"
                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                  </path>
                </svg>
              </a>

              <a class="text-white hover:text-[#0ebab1]" aria-label="Visit TrendyMinds Instagram" href=""
                target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5">
                  <path fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                  </path>
                </svg>
              </a>

              <a class="text-white hover:text-[#0ebab1]" aria-label="Visit TrendyMinds LinkedIn" href=""
                target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-5">
                  <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                  </path>
                </svg>
              </a>

              <a class="text-white hover:text-[#0ebab1]" aria-label="Visit TrendyMinds Twitter" href=""
                target="_blank"><svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                  </path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="font-semibold text-[1.4rem] mt-2 ml-3">Company</h3>
            <ul class="text-lg font-medium mt-6 ml-4 space-y-6">
              <li class="hover:text-[#0ebab1] duration-500">Home</li>
              <li class="hover:text-[#0ebab1] duration-500">About</li>
              <li class="hover:text-[#0ebab1] duration-500">Reviews</li>
              <li class="hover:text-[#0ebab1] duration-500">Careers</li>
              <li class="hover:text-[#0ebab1] duration-500">Referrals</li>
            </ul>
          </div>

          <div class="-ml-[85px]">
            <h3 class="font-semibold text-[1.4rem] mt-2">Services & Solutions</h3>
            <ul class="text-lg font-medium mt-6 space-y-[19px]">
              <li class="hover:text-[#0ebab1] duration-500">Web Development</li>
              <li class="hover:text-[#0ebab1] duration-500">Mobile App Development</li>
              <li class="hover:text-[#0ebab1] duration-500">Generative AI</li>
              <li class="hover:text-[#0ebab1] duration-500">Custom Development</li>
            </ul>
          </div>

          <div class="-ml-[93px] mt-[65px]">
            <ul class="text-lg font-medium space-y-[19px]">
              <li class="hover:text-[#0ebab1] duration-500">Mycrosoft Dynamics 365</li>
              <li class="hover:text-[#0ebab1] duration-500">Cybersecurity Solutions</li>
              <li class="hover:text-[#0ebab1] duration-500">QA Testing</li>
              <li class="hover:text-[#0ebab1] duration-500">Digital Tranformation</li>
            </ul>
          </div>

          <div class="-ml-[93px] mt-[4px]">
            <h3 class="text-[1.4rem] font-semibold">Resources</h3>
            <ul class="text-lg font-medium mt-6 space-y-[20px]">
              <li class="hover:text-[#0ebab1] duration-500">Case Studies</li>
              <li class="hover:text-[#0ebab1] duration-500">Learning</li>
              <li class="hover:text-[#0ebab1] duration-500">Security</li>
              <li class="hover:text-[#0ebab1] duration-500">FAQ</li>
            </ul>
          </div>
        </div>
        <div class="mt-[30px]">
          <h3 class="text-[1.3rem] font-bold">Subscribe</h3>
          <p class="text-lg font-medium mt-[6px]">Stay updated with the latest in tech.</p>
          <form class="relative">
            <label for="email" class="absolute text-sm mt-3">Email<span class="text-red-600">*</span></label>
            <input type="email" id="email" class="w-[303px] h-[3px]0 mt-9 rounded-sm">
          </form>
          <button class="mt-[29px] bg-[#425b76] text-xs font-bold p-[10px] px-[24px] rounded-sm">Submit</button>
        </div>

        <div class="mt-[45px] border-t ">
          <ul class="flex gap-[80px] text-xs mt-[15px]">
            <li class="text-sm hover:text-[#0ebab1] duration-500">Terms & Conditions</li>
            <li class="text-sm hover:text-[#0ebab1] duration-500">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>

  </div>
</template>



<script setup>
import Image from '@/assets/css/background.png'

import { ref, onMounted } from 'vue'

const sliderContent = ref(null)

onMounted(() => {
  if (sliderContent.value) {
    const content = sliderContent.value.innerHTML
    sliderContent.value.innerHTML = content + content
  }
})
</script>


<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

.slider-content {
  animation: scroll 30s linear infinite;
}

.item {
  padding: 0 50px;
}

.img-container {
  width: 60px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
