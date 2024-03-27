<template>
  <div>
    <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true" v-if="isOpen">
      <div class="fixed inset-0 bg-gray-200"></div>
      <div class="fixed inset-0 flex">
        <div class="relative mr-16 flex w-full max-w-xs flex-1">
          <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
            <button @click="isOpen = false" type="button" class="-m-2.5 p-2.5">
              <span class="sr-only">Close sidebar</span>
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
            <div class="flex h-16 shrink-0 items-center">
              <img class="h-8 w-auto" src="@/assets/img/logo.png" alt="Your Company" />
            </div>
            <nav class="flex flex-1 flex-col">
              <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" class="-mx-2 space-y-1">
                    <li>
                      <nuxt-link to="/dashboard/organization" @click="isOpen = false"
                        class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.00084 8.70317C7.94764 8.70233 7.89692 8.68049 7.85974 8.64241C7.82257 8.60434 7.80195 8.55311 7.80237 8.4999C7.80237 8.38786 7.89201 8.29663 8.00084 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M4.55545 8.69677C4.52939 8.69656 4.50362 8.69122 4.47963 8.68105C4.45563 8.67088 4.43386 8.65609 4.41558 8.63751C4.3973 8.61893 4.38286 8.59693 4.37308 8.57277C4.3633 8.54861 4.35838 8.52276 4.35859 8.4967C4.35859 8.38626 4.44662 8.29663 4.55545 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M11.4486 8.69677C11.4226 8.69656 11.3968 8.69122 11.3728 8.68105C11.3488 8.67088 11.3271 8.65609 11.3088 8.63751C11.2905 8.61893 11.276 8.59693 11.2663 8.57277C11.2565 8.54861 11.2516 8.52276 11.2518 8.4967C11.2518 8.38626 11.3398 8.29663 11.4486 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M8.00555 8.70317C8.03204 8.70296 8.05822 8.69754 8.08261 8.68721C8.107 8.67688 8.12911 8.66185 8.14769 8.64297C8.16627 8.6241 8.18095 8.60175 8.19089 8.5772C8.20083 8.55265 8.20583 8.52638 8.20562 8.4999C8.20583 8.47342 8.20083 8.44715 8.19089 8.4226C8.18095 8.39805 8.16627 8.3757 8.14769 8.35683C8.12911 8.33795 8.107 8.32292 8.08261 8.31259C8.05822 8.30226 8.03204 8.29684 8.00555 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M4.55652 8.69677C4.58258 8.69656 4.60835 8.69122 4.63235 8.68105C4.65635 8.67088 4.67811 8.65609 4.69639 8.63751C4.71467 8.61893 4.72911 8.59693 4.73889 8.57277C4.74867 8.54861 4.7536 8.52276 4.75339 8.4967C4.7536 8.47064 4.74867 8.44479 4.73889 8.42063C4.72911 8.39647 4.71467 8.37447 4.69639 8.35589C4.67811 8.33731 4.65635 8.32252 4.63235 8.31235C4.60835 8.30218 4.58258 8.29684 4.55652 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M11.4494 8.69677C11.4755 8.69656 11.5012 8.69122 11.5252 8.68105C11.5492 8.67088 11.571 8.65609 11.5893 8.63751C11.6076 8.61893 11.622 8.59693 11.6318 8.57277C11.6416 8.54861 11.6465 8.52276 11.6463 8.4967C11.6465 8.47064 11.6416 8.44479 11.6318 8.42063C11.622 8.39647 11.6076 8.37447 11.5893 8.35589C11.571 8.33731 11.5492 8.32252 11.5252 8.31235C11.5012 8.30218 11.4755 8.29684 11.4494 8.29663"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M8.00271 1.29761C6.69294 1.29805 5.40801 1.65508 4.28576 2.3304C3.16351 3.00573 2.24631 3.97385 1.63254 5.13091C1.0208 6.28766 0.736954 7.58966 0.811711 8.89607C0.886468 10.2025 1.31698 11.4636 2.05669 12.543L0.800261 15.7025L4.1614 14.5693C5.10603 15.1618 6.17518 15.5273 7.28486 15.6369C8.39454 15.7465 9.51452 15.5973 10.5568 15.201C11.5991 14.8047 12.5353 14.1721 13.2918 13.353C14.0484 12.5338 14.6047 11.5504 14.9171 10.4799C15.2269 9.40976 15.2831 8.28214 15.0815 7.18644C14.8798 6.09075 14.4256 5.05708 13.7551 4.16738C13.0842 3.27604 12.2153 2.55282 11.217 2.05479C10.2187 1.55675 9.11833 1.29754 8.00271 1.29761Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Organizations
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/dashboard/workflow" @click="isOpen = false"
                        class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.24335 13.5195V3.86671C1.24335 2.58791 2.27812 1.55005 3.55692 1.55005H13.9912C14.4174 1.55005 14.7572 1.896 14.7572 2.32227V10.8167C14.7572 11.0215 14.6759 11.2179 14.531 11.3628C14.3862 11.5076 14.1898 11.5889 13.985 11.5889H3.1739C2.10823 11.5889 1.24335 12.4538 1.24335 13.5195ZM1.24335 13.5195C1.24335 14.5851 2.10823 15.45 3.1739 15.45H14.7572M12.8269 11.589V15.4501"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Workflows
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/dashboard/teams" @click="isOpen = false"
                        class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.72246 7.08531C4.47963 7.08531 5.20579 6.78452 5.74119 6.24912C6.27659 5.71373 6.57737 4.98757 6.57737 4.2304C6.57737 3.47323 6.27659 2.74707 5.74119 2.21167C5.20579 1.67627 4.47963 1.37549 3.72246 1.37549C2.96529 1.37549 2.23914 1.67627 1.70374 2.21167C1.16834 2.74707 0.867554 3.47323 0.867554 4.2304C0.867554 4.98757 1.16834 5.71373 1.70374 6.24912C2.23914 6.78452 2.96529 7.08531 3.72246 7.08531Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M12.2774 7.08533C13.0346 7.08533 13.7608 6.78454 14.2962 6.24914C14.8316 5.71375 15.1324 4.98759 15.1324 4.23042C15.1324 3.47325 14.8316 2.74709 14.2962 2.21169C13.7608 1.67629 13.0346 1.37551 12.2774 1.37551C11.5203 1.37551 10.7941 1.67629 10.2587 2.21169C9.72332 2.74709 9.42254 3.47325 9.42254 4.23042C9.42254 4.98759 9.72332 5.71375 10.2587 6.24914C10.7941 6.78454 11.5203 7.08533 12.2774 7.08533Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M3.72246 15.6245C4.09738 15.6245 4.46862 15.5507 4.81499 15.4072C5.16136 15.2637 5.47609 15.0534 5.74119 14.7883C6.00629 14.5232 6.21658 14.2085 6.36006 13.8621C6.50353 13.5158 6.57737 13.1445 6.57737 12.7696C6.57737 12.3947 6.50353 12.0235 6.36006 11.6771C6.21658 11.3307 6.00629 11.016 5.74119 10.7509C5.47609 10.4858 5.16136 10.2755 4.81499 10.132C4.46862 9.98854 4.09738 9.9147 3.72246 9.9147C2.96529 9.9147 2.23914 10.2155 1.70374 10.7509C1.16834 11.2863 0.867554 12.0124 0.867554 12.7696C0.867554 13.5268 1.16834 14.2529 1.70374 14.7883C2.23914 15.3237 2.96529 15.6245 3.72246 15.6245Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M12.2774 15.6245C12.6524 15.6245 13.0236 15.5507 13.37 15.4072C13.7163 15.2637 14.0311 15.0534 14.2962 14.7883C14.5613 14.5232 14.7716 14.2085 14.915 13.8621C15.0585 13.5158 15.1324 13.1445 15.1324 12.7696C15.1324 12.3947 15.0585 12.0235 14.915 11.6771C14.7716 11.3307 14.5613 11.016 14.2962 10.7509C14.0311 10.4858 13.7163 10.2755 13.37 10.132C13.0236 9.98854 12.6524 9.9147 12.2774 9.9147C11.5203 9.9147 10.7941 10.2155 10.2587 10.7509C9.72332 11.2863 9.42254 12.0124 9.42254 12.7696C9.42254 13.5268 9.72332 14.2529 10.2587 14.7883C10.7941 15.3237 11.5203 15.6245 12.2774 15.6245Z"
                            stroke="#666F8D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Team
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="mt-auto">
                  <nuxt-link @click="isOpen = false" to="/dashboard/organization/create"
                    class="group -mx-2  justify-center items-center flex gap-x-3 rounded-md p-2 text-sm font-semibold bg-[#1F9D00] leading-6 text-white">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1.375V12.625M12.625 7H1.375" stroke="white" stroke-width="1.2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                    New organization
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-100 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="@/assets/img/logo.png" alt="Your Company" />
        </div>
        <div class="relative w-full">
          <input placeholder="Search for applications..."
            class="border-[0.6px] border-gray-300 w-full pl-10 py-2.5 rounded-md px-3 text-sm font-light shadow" />
          <svg class="absolute top-4 left-4" width="13" height="12" viewBox="0 0 13 12" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.7 11.2L9.01039 8.51039M1.30005 5.28281C1.30005 2.80705 3.30705 0.800049 5.78281 0.800049C8.25858 0.800049 10.2656 2.80705 10.2656 5.28281C10.2656 7.75858 8.25858 9.76557 5.78281 9.76557C3.30705 9.76557 1.30005 7.75858 1.30005 5.28281Z"
              stroke="#666F8D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in sidebarItems" :key="item.name">
                  <NuxtLink :to="item.route" :class="getNavItemClass(item.route)"
                    class="group flex gap-x-3 rounded-md p-2.5 text-sm leading-6 font-semibold">
                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <nuxt-link to="/dashboard/organization/create"
                class="group -mx-2 flex justify-center items-center gap-x-3 rounded-md p-2.5 text-sm font-semibold bg-[#1F9D00] leading-6 text-white hover:bg-gray-800 hover:text-white">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.375V12.625M12.625 7H1.375" stroke="white" stroke-width="1.2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                New organization
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">

      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <div class="flex justify-end items-end md:hidden">
          <button @click="isOpen = true" type="button" class="-m-2.5 p-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none"
              stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="flex items-center justify-between w-full">
          <h2 class="font-semibold text-sm lg:text-base">Evans Organization</h2>
          <div class="flex justify-center items-center gap-x-6">
            <div>
              <button
                class="flex text-sm lg:text-base items-center gap-x-3 font-semibold bg-[#1F9D00] text-white px-6 py-2 rounded-md border border-blue-500"><svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1.5V10.5M10.5 6H1.5" stroke="white" stroke-width="1.2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                New Process</button>
            </div>
            <div class="bg-gray-5300 h-10 w-0.5 bg-gray-500 mb-0.5 hidden lg:block"></div>
            <div class="lg:flex justify-center items-center gap-x-4 hidden">
              <div>
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.98245 3.58032L6.47695 2.3078C6.56088 2.09316 6.70785 1.90897 6.89852 1.7795C7.08919 1.65004 7.31461 1.58136 7.54507 1.58253H8.47144C8.70106 1.58236 8.92539 1.6515 9.11508 1.7809C9.30477 1.9103 9.45099 2.09394 9.53461 2.3078L10.0291 3.58032L11.6774 4.53635L13.0291 4.33196C13.2551 4.2986 13.4859 4.33387 13.6916 4.4332C13.8973 4.53254 14.0685 4.69136 14.1829 4.88909L14.6477 5.69348C14.7622 5.89229 14.8141 6.12094 14.7967 6.34967C14.7794 6.5784 14.6936 6.7966 14.5505 6.97588L13.6983 8.044V9.95607L14.5505 11.0242C14.6936 11.2035 14.7794 11.4217 14.7967 11.6504C14.8141 11.8791 14.7622 12.1078 14.6477 12.3066L14.1829 13.111C14.0685 13.3087 13.8973 13.4675 13.6916 13.5669C13.4859 13.6662 13.2551 13.7015 13.0291 13.6681L11.6774 13.4637L10.0291 14.4198L9.53461 15.6923C9.45099 15.9061 9.30477 16.0898 9.11508 16.2192C8.92539 16.3486 8.70106 16.4177 8.47144 16.4175H7.54507C7.31545 16.4177 7.09112 16.3486 6.90143 16.2192C6.71174 16.0898 6.56552 15.9061 6.4819 15.6923L5.9874 14.4198L4.33906 13.4637L2.98743 13.6681C2.76143 13.7015 2.53061 13.6662 2.32489 13.5669C2.11917 13.4675 1.94801 13.3087 1.83359 13.111L1.35228 12.3066C1.23786 12.1078 1.18594 11.8791 1.20328 11.6504C1.22063 11.4217 1.30644 11.2035 1.44953 11.0242L2.30172 9.95607V8.044L1.44953 6.97588C1.30644 6.7966 1.22063 6.5784 1.20328 6.34967C1.18594 6.12094 1.23786 5.89229 1.35228 5.69348L1.81711 4.88909C1.93153 4.69136 2.10268 4.53254 2.30841 4.4332C2.51413 4.33387 2.74494 4.2986 2.97094 4.33196L4.32258 4.53635L5.98245 3.58032ZM5.94784 9.00004C5.94784 9.54649 6.16492 10.0706 6.55132 10.457C6.93772 10.8434 7.4618 11.0605 8.00825 11.0605C8.55471 11.0605 9.07879 10.8434 9.46519 10.457C9.85159 10.0706 10.0687 9.54649 10.0687 9.00004C10.0687 8.45358 9.85159 7.92951 9.46519 7.5431C9.07879 7.1567 8.55471 6.93962 8.00825 6.93962C7.4618 6.93962 6.93772 7.1567 6.55132 7.5431C6.16492 7.92951 5.94784 8.45358 5.94784 9.00004Z"
                    stroke="#666F8D" stroke-width="1.3" stroke-linecap="round" />
                </svg>
              </div>
              <div>
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.99884 4.88834H15.0009M5.0474 4.88177V4.50454C5.0474 3.7308 5.35476 2.98875 5.90188 2.44164C6.44899 1.89452 7.19104 1.58716 7.96477 1.58716C8.73851 1.58716 9.48056 1.89452 10.0277 2.44164C10.5748 2.98875 10.8822 3.7308 10.8822 4.50454V4.88177M11.7106 16.4128H4.29774C3.86085 16.4128 3.44185 16.2392 3.13292 15.9303C2.82399 15.6214 2.65044 15.2024 2.65044 14.7655V4.88164H13.3579V14.7655C13.3579 15.2024 13.1844 15.6214 12.8754 15.9303C12.5665 16.2392 12.1475 16.4128 11.7106 16.4128Z"
                    stroke="#666F8D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.32648 5.77529H14.6736M6.51607 9.48283H9.48211M13.1906 1.32642H2.8095C2.41617 1.32642 2.03896 1.48266 1.76084 1.76078C1.48272 2.0389 1.32648 2.41611 1.32648 2.80943V13.1906C1.32648 13.5839 1.48272 13.9611 1.76084 14.2392C2.03896 14.5173 2.41617 14.6736 2.8095 14.6736H13.1906C13.5839 14.6736 13.9612 14.5173 14.2393 14.2392C14.5174 13.9611 14.6736 13.5839 14.6736 13.1906V2.80943C14.6736 2.41611 14.5174 2.0389 14.2393 1.76078C13.9612 1.48266 13.5839 1.32642 13.1906 1.32642Z"
                    stroke="#666F8D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.3058 1.44592V14.5654M1.20001 3.07581C1.20001 2.0398 2.03986 1.19995 3.07587 1.19995H12.9242C13.9602 1.19995 14.8 2.0398 14.8 3.07581V12.9241C14.8 13.9601 13.9602 14.8 12.9242 14.8H3.07587C2.03986 14.8 1.20001 13.9601 1.20001 12.9241V3.07581Z"
                    stroke="#666F8D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import organizationLogo from '../assets/icons/organization.svg'
import workflowLogo from '../assets/icons/workflow.svg'
const isOpen = ref(false)
const route = useRoute()

const sidebarItems = [
  { icon: organizationLogo, name: 'Dashboard', route: '/dashboard/organization' },
  { icon: workflowLogo, name: 'Workflow', route: '/dashboard/workflow' },
];

function getNavItemClass(itemRoute: any) {
  return route.path === itemRoute ? 'active' : '';
}

</script>

<style>
/* Define your styles here */
.sidebar ul {
  /* Sidebar styling */
}

.sidebar ul li {
  /* List item styling */
}

.active {
  @apply bg-blue-500 text-white;
  /* Tailwind CSS class for active items */
}
</style>