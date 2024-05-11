<template>
  <div class="space-y-6">
    <div class="container px-6 py-8 mx-auto">
      <h1 class="text-xl text-gray-800 font-semibold text-center capitalize lg:text-3xl dark:">Simple pricing plan</h1>

      <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit
        amet id repudiandae ea, deleniti laborum in neque eveniet.
      </p>
      <fieldset class="space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <legend class="sr-only">Delivery</legend>

        <div>
          <label for="basic"
            class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
            <div>
              <p class="text-gray-700">Basic</p>

              <p class="mt-1 text-gray-900">Free</p>
            </div>

            <input type="radio" v-model="plan" name="DeliveryOption" value="basic" id="basic"
              class="size-5 h-5 w-5 border-gray-300 text-blue-500" checked />
          </label>
        </div>

        <div>
          <label for="pro"
            class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
            <div>
              <p class="text-gray-700">PRO</p>

              <div class="flex items-center gap-x-3">
                <p class="mt-1 text-gray-900">$149 /Month</p>
                <div
                  class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full dark:text-blue-400 sm:px-4 sm:py-1 dark:bg-gray-700 ">
                  Save 20%
                </div>
              </div>
            </div>

            <input type="radio" v-model="plan" name="DeliveryOption" value="pro" id="pro"
              class="size-5 border-gray-300 h-5 w-5 text-blue-500" />
          </label>
        </div>
      </fieldset>

      <div v-if="plan === 'basic'" class="p-8 mt-4 space-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-0.svg" />Food & Activity Tracking</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-1.svg" />Macronutrient Tracking</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-2.svg" />Create & Browse Recipes</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-3.svg" />1M+ Foods & Brands</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-4.svg" />Premium Weight Loss Plans</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-5.svg" />Fitbit Activity Tracking</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
              clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div v-if="plan === 'pro'" class="p-8 mt-4 space-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-0.svg" />Food & Activity Tracking</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-1.svg" />Macronutrient Tracking</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500 " viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-2.svg" />Create & Browse Recipes</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500 " viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-3.svg" />1M+ Foods & Brands</p>


          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-4.svg" />Premium Weight Loss Plans</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500 " viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
          <p class="text-sm flex items-center gap-x-3"><img
              src="https://account.healthiapp.com/images/feature-icons/feature-5.svg" />Fitbit Activity Tracking</p>


          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <button
          class="px-8 py-2.5 text-white tracking-wide rounded-lg  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          Updrade to PRO
        </button>
      </div>
    </div>

    <div class="rounded-lg rounded-b-xl shadow-lg bg-white border-[0.2px]">
      <div
        class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-t-xl py-9">
        <div class="flex justify-center items-center flex-col">
          <div class="flex items-center gap-x-2">
            <h1 class="text-white text-xl font-bold">Learn more about</h1> <button
              class=" px-2 py-1 text-xs bg-white rounded-md text-purple-700 border-none">PRO</button>
          </div>
          <p class="text-white text-sm leading-snug text-center max-w-xs font-light">The PRO subscription provides all
            the tools
            and resources needed to
            maximize your goals.</p>
        </div>
      </div>
      <section class="space-y-9 p-6 lg:p-14">
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 gap-x-6 lg:gap-x-12">
          <section class="space-y-4">
            <h1 class="font-semibold text-gray-500 text-base">More Plans</h1>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/balance.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Better Balance Plan</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Prioritize quality over quantity with an emphasis
                  on
                  fresh, clean
                  eating.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/keto.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Keto Balance Plan</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Opt for a low-carb, high-fat diet to accelerate
                  fat burn.</p>
              </div>
            </div>
          </section>
          <section class="space-y-4">
            <h1 class="font-semibold text-gray-500 text-base">More Resources</h1>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/recipe.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Recipe Database</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Browse 500K+ recipes to find your perfect meal.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/restaurant.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Restaurant Guide</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Make healthy decisions on what you eat while
                  eating out.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/snack.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Snack & Beer Guides</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Search our database of 1M+ brand-named snacks and
                  beers.</p>
              </div>
            </div>
          </section>
        </section>

        <section class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
          <section class="space-y-4">
            <h1 class="font-semibold text-gray-500 text-base">More Tracking</h1>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/voice.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Voice Search</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Simply state the food and meal - we’ll do the
                  rest..</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/track.svg" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Macronutrient Tracking</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Track your carb, protein, and fat intake per meal.
                  on
                  fresh, clean
                  eating.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/recipe.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Recipe Builder</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Create your own custom recipes.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/fitbit.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Fitbit Step Tracking</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Automate activity tracking with Fitbit
                  integration.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/export-log.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Export Logs</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Prioritize quality over quantity with an emphasis
                  on
                  fresh, clean
                  eating.</p>
              </div>
            </div>
          </section>
          <section class="space-y-4">
            <h1 class="font-semibold text-gray-500 text-base">More Support</h1>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/community.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Community Posting</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Engage with an active online community of members.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/coaches.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Speak to Coaches</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Reach out to coaches any time for questions,
                  support, and motivation.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div>
                <img src="https://account.healthiapp.com/images/more-about-pro/engage.svg" class="h-16 w-16" />
              </div>
              <div>
                <h1 class="font-medium text-gray-800 text-sm py-0 my-0">Engage with Groups</h1>
                <p class="text-sm font-light text-gray-300 py-0 my-0">Groups provide an additional support system on
                  your journey..</p>
              </div>
            </div>
          </section>
        </section>
      </section>

      <div
        class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-t-xl py-9">
        <div class="flex justify-center items-center flex-col">
          <p class="text-white text-sm leading-snug text-center max-w-xs font-light">You're ready to supercharge your
            weight loss with our most popular PRO features.
            .</p>
        </div>
        <div class="flex justify-center mt-8">
          <button
            class="px-8 py-2.5 uppercase text-white font-bold text-sm tracking-wide rounded-lg  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            Updrade - $44.99/Year
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'user-dashboard'
})

const plan = ref('basic')
</script>