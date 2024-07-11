<template>
    <main class="space-y-6">
        <nav aria-label="Progress">
            <ol role="list" class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
              <li class="relative md:flex md:flex-1">
                <!-- Completed Step -->
                <a href="#" class="group flex w-full items-center">
                  <span class="flex items-center px-6 py-4 text-sm font-medium">
                    <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span class="ml-4 text-sm font-medium text-gray-900">Starter Stage</span>
                  </span>
                </a>
                <!-- Arrow separator for lg screens and up -->
                <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                  <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                    <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
                  </svg>
                </div>
              </li>
              <li class="relative md:flex md:flex-1">
                <!-- Current Step -->
                <a href="#" class="flex items-center px-6 py-4 text-sm font-medium cursor-not-allowed opacity-25" aria-current="step">
                  <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                    <span class="text-indigo-600">02</span>
                  </span>
                  <span class="ml-4 text-sm font-medium text-indigo-600">Consolidation Stage</span>
                </a>
                <!-- Arrow separator for lg screens and up -->
                <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                  <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                    <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
                  </svg>
                </div>
              </li>
              <li class="relative md:flex md:flex-1">
                <!-- Upcoming Step -->
                <a href="#" class="group flex items-center">
                  <span class="flex items-center px-6 py-4 text-sm font-medium cursor-not-allowed opacity-25">
                    <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                      <span class="text-gray-500 group-hover:text-gray-900">03</span>
                    </span>
                    <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Perfection Stage</span>
                  </span>
                </a>
              </li>
            </ol>
          </nav>
          
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div class="rounded-lg shadow-lg bg-white border-[0.2px] p-6 space-y-6">
                <h1 class="font-semibold text-gray-500 text-base">Profile</h1>
                <div class="space-y-4">
                    <div class="flex items-center gap-x-3">
                        <img src="https://account.healthiapp.com/static/media/mail.e4d350a5.svg" />
                        <p class="text-sm text-gray-500">abahmarquis@gmail.com</p>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <img src="https://account.healthiapp.com/static/media/cake.5bf8a2b1.svg" />
                        <p class="text-sm text-gray-500">February 8, 1999</p>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <img src="https://account.healthiapp.com/static/media/height.becc7032.svg" />
                        <p class="text-sm text-gray-500">6 ft 11 in</p>
                    </div>
                </div>
                <div>
                    <NuxtLink class="text-[#357392] font-semibold text-sm" to="/user-dashboard/profile">Edit Profile >
                    </NuxtLink>
                </div>
            </div>
            <div class="rounded-lg rounded-b-xl shadow-lg bg-white border-[0.2px]">
                <div class="p-6 space-y-3">
                    <h1 class="font-semibold text-gray-500 text-sm">MEMBERSHIP</h1>
                    <p class="text-2xl font-medium">Basic</p>
                </div>
                <div
                    class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-b-xl">
                    <div class="p-6 space-y-6">
                        <p class="text-white text-sm leading-snug">Supercharge your weight loss with unlimited access to
                            our most popular
                            PRO features.</p>
                        <button class="bg-[#D66DE8] text-white px-6 py-2 rounded-md text-sm border-none">Explore
                            Pro</button>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="rounded-lg shadow-lg bg-white border-[0.2px] lg:h-[195px] relative grid grid-cols-1 lg:grid-cols-2 p-2.5 space-y-6 lg:divide-x lg:divide-gray-200">
            <div class="space-y-2 p-3">
                <h1 class="font-semibold text-gray-500 text-base">Your Plan</h1>
                <p class="text-2xl text-gray-800 font-medium">Conquer Cravings
                    <span class="rounded-full bg-yellow-200 shadow border inline-block p-1"><svg
                            xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="#b3a60a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg></span>
                </p>
                <p class="text-sm text-gray-500 leading-relaxed max-w-xs">Establish healthy eating habits with an
                    emphasis on portion
                    control.
                </p>
                <div>
                    <NuxtLink class="text-[#357392] font-semibold text-sm" to="/user-dashboard/profile">Change Your
                        Plan
                        >
                    </NuxtLink>
                </div>
            </div>
            <div class="lg:flex">
                <div class="p-4">
                    <h1 class="font-semibold text-gray-500 text-base">Your Plan</h1>
                    <p class="text-sm text-gray-500">Your daily allowance is 25 bites.</p>
                </div>
                <img src="@/assets/img/meal.jpg" alt=""
                    class="w-32 rounded-tr-lg rounded-br-lg hidden lg:block absolute bottom-0 inset-y-0 right-0" />
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white border-[0.2px] p-6 space-y-6">
            <div class="space-y-6">
                <h1 class="font-semibold text-gray-500 text-base">MOBILE APP</h1>
                <section class="space-y-2">
                    <p class="text-sm text-gray-500 leading-relaxed max-w-lg">Enter your phone number for a direct link
                        to
                        download Healthi on your phone.</p>
                    <div class="lg:flex items-center lg:gap-x-4 space-y-4 lg:space-y-0">
                        <div class="lg:w-9/12">
                            <input type="tel" placeholder="+1 (000) 000-0000"
                                class="bg-gray-25 border-[0.2px] outline-none placeholder:text-gray-300 placeholder:font-light px-4 w-full rounded-md py-3" />
                        </div>
                        <div>
                            <button class="text-white bg-[#357392] px-6 py-3 rounded-md text-xs font-light">TEXT ME
                                THE
                                APP</button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user-dashboard'
})
</script>