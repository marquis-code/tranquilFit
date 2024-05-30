<template>
    <div class="min-h-full">
        <header class="bg-indigo-600 pb-24">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="relative flex items-center justify-center py-5 lg:justify-between">
                    <!-- Logo -->
                    <div class="absolute left-0 flex-shrink-0 lg:static">
                        <a href="#">
                            <span class="sr-only">Your Company</span>
                            <img class="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                                alt="Your Company">
                        </a>
                    </div>

                    <!-- Right section on desktop -->
                    <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                        <button type="button"
                            class="relative flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">View notifications</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <!-- Profile dropdown -->
                        <div class="relative ml-4 flex-shrink-0">
                            <div>
                                <button type="button" @click="showProfileOptions = !showProfileOptions"
                                    class="relative flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="absolute -inset-1.5"></span>
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                </button>
                            </div>

                            <!--
                Dropdown menu, show/hide based on menu state.
  
                Entering: ""
                  From: ""
                  To: ""
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
                            <div v-if="showProfileOptions"
                                class="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                tabindex="-1">
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-0">Your Profile</a>
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-1">Settings</a>
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-2">Sign out</a>
                            </div>
                        </div>
                    </div>

                    <!-- Search -->
                    <div class="min-w-0 flex-1 px-12 lg:hidden">
                        <div class="mx-auto w-full max-w-xs">
                            <label for="desktop-search" class="sr-only">Search</label>
                            <div class="relative text-white focus-within:text-gray-600">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input id="desktop-search"
                                    class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                                    placeholder="Search" type="search" name="search">
                            </div>
                        </div>
                    </div>

                    <!-- Menu button -->
                    <div class="absolute right-0 flex-shrink-0 lg:hidden">
                        <!-- Mobile menu button -->
                        <button type="button" @click="showDropdown = true"
                            class="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <!-- Menu open: "hidden", Menu closed: "block" -->
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <!-- Menu open: "block", Menu closed: "hidden" -->
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="hidden border-t border-white border-opacity-20 py-5 lg:block">
                    <div class="grid grid-cols-3 items-center gap-8">
                        <div class="col-span-2">
                            <nav class="flex space-x-4">
                                <!-- Current: "text-white", Default: "text-indigo-100" -->
                                <a href="#"
                                    class="text-white rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                                    aria-current="page">How It Works
                                </a>
                                <a href="#"
                                    class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Find
                                    Your Plan</a>
                                <a href="#"
                                    class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Blog</a>
                                <a href="#"
                                    class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Help</a>
                                <a href="#"
                                    class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Coaches</a>
                                <a href="#"
                                    class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Podcast</a>
                                <a href="#"
                                    class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Success
                                    Stories
                                </a>
                            </nav>
                        </div>
                        <div>
                            <div class="mx-auto w-full max-w-md">
                                <label for="mobile-search" class="sr-only">Search</label>
                                <div class="relative text-white focus-within:text-gray-600">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input id="mobile-search"
                                        class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                                        placeholder="Search" type="search" name="search">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on mobile menu state. -->
            <div class="lg:hidden" v-if="showDropdown">
                <!--
          Mobile menu overlay, show/hide based on mobile menu state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "duration-150 ease-in"
            From: "opacity-100"
            To: "opacity-0"
        -->
                <div class="fixed inset-0 z-20 bg-black bg-opacity-25" aria-hidden="true"></div>

                <!--
          Mobile menu, show/hide based on mobile menu state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-150 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
                <div class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition">
                    <div
                        class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div class="pb-2 pt-3">
                            <div class="flex items-center justify-between px-4">
                                <div>
                                    <img class="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company">
                                </div>
                                <div class="-mr-2">
                                    <button type="button" @click="showDropdown = false"
                                        class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span class="absolute -inset-0.5"></span>
                                        <span class="sr-only">Close menu</span>
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="mt-3 space-y-1 px-2">
                                <a href="#" @click.prevent="toggleMobile('account-overview')"
                                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Account
                                    Overview</a>
                                <a href="#" @click.prevent="toggleMobile('edit-profile')"
                                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Edit
                                    Profile</a>
                                <a href="#" @click.prevent="toggleMobile('plan-summary')"
                                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Plan
                                    Summary</a>
                                <a href="#" @click.prevent="toggleMobile('manage-subscription')"
                                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Manage
                                    Subscription
                                </a>
                                <a href="#" @click.prevent="toggleMobile('promo-code')"
                                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Promo
                                    Code</a>
                            </div>
                        </div>
                        <div class="pb-2 pt-4">
                            <div class="flex items-center px-5">
                                <div class="flex-shrink-0">
                                    <img class="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                </div>
                                <div class="ml-3 min-w-0 flex-1">
                                    <div class="truncate text-base font-medium text-gray-800">Tom Cook</div>
                                    <div class="truncate text-sm font-medium text-gray-500">tom@example.com</div>
                                </div>
                                <button type="button"
                                    class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="absolute -inset-1.5"></span>
                                    <span class="sr-only">View notifications</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </button>
                            </div>
                            <div class="mt-3 space-y-1 px-2">
                                <a href="#"
                                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Your
                                    Profile</a>
                                <a href="#"
                                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Settings</a>
                                <a href="#" @click.prevent="logOut"
                                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Sign
                                    out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main class="-mt-24 pb-8">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 class="sr-only">Page title</h1>
                <!-- Main 3 column grid -->
                <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-[300px_1fr] lg:gap-8">
                    <!-- Right column -->
                    <div class="lg:grid grid-cols-1 gap-4 hidden">
                        <section aria-labelledby="section-2-title">
                            <h2 class="sr-only" id="section-2-title">Section title</h2>
                            <div class="overflow-hidden rounded-lg bg-white shadow h-[700px]">
                                <div class="p-6">
                                    <div class="flex justify-end items-end">
                                        <span
                                            class="text-gray-800 font-semibold bg-gray-100 rounded-xl text-sm px-3 py-1.5">Basic</span>
                                    </div>
                                    <div
                                        class="flex justify-center items-center flex-col border-b border-gray-100 pb-6">
                                        <svg width="100px" height="100px" viewBox="0 0 24 24"
                                            id="_24x24_On_Light_User-Alert" data-name="24x24/On Light/User-Alert"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect id="view-box" width="24" height="24" fill="none" />
                                            <path id="Shape"
                                                d="M9.75,19.5A9.75,9.75,0,1,1,11.68.192,5.479,5.479,0,0,0,11,1.6,8.254,8.254,0,0,0,1.5,9.75a8.163,8.163,0,0,0,1.713,5.027A5.594,5.594,0,0,1,5.135,13.7c.141-.052.288-.1.475-.167l.443-.149c.855-.293,1.169-.481,1.244-.747l0-.009.005-.024a.771.771,0,0,0-.058-.519.907.907,0,0,0-.237-.271A4.359,4.359,0,0,1,5.5,8.417,4.29,4.29,0,0,1,9.75,4a4.1,4.1,0,0,1,1.072.143,5.505,5.505,0,0,0,.937,2.28A2.7,2.7,0,0,0,9.75,5.5,2.807,2.807,0,0,0,7,8.417a2.848,2.848,0,0,0,1,2.274,2.28,2.28,0,0,1,.571.695,2.208,2.208,0,0,1,.2,1.537,1.41,1.41,0,0,1-.045.171c-.244.9-.9,1.271-2.188,1.711l-.445.15c-.166.056-.3.1-.437.154a4.286,4.286,0,0,0-1.419.77,8.234,8.234,0,0,0,11.03,0,4.3,4.3,0,0,0-1.421-.751c-.112-.041-.229-.081-.377-.13l-.386-.13c-1.332-.45-2.015-.825-2.293-1.742a1.863,1.863,0,0,1-.055-.223,2.36,2.36,0,0,1,.138-1.4,2.122,2.122,0,0,1,.589-.795,2.815,2.815,0,0,0,1.042-2.3,3.018,3.018,0,0,0-.489-1.666A5.557,5.557,0,0,0,14,8.268q0,.074,0,.149a4.3,4.3,0,0,1-1.559,3.427.673.673,0,0,0-.194.255.92.92,0,0,0-.043.527c.006.031.01.046.013.055.08.26.431.461,1.342.769l.384.129c.147.05.279.095.408.141a5.6,5.6,0,0,1,1.935,1.058A8.169,8.169,0,0,0,18,9.75,8.308,8.308,0,0,0,17.9,8.5a5.478,5.478,0,0,0,1.4-.676A9.755,9.755,0,0,1,9.75,19.5ZM17.362,6.569h0a8.342,8.342,0,0,0-4.431-4.43,3.527,3.527,0,0,1,.782-1.3,9.774,9.774,0,0,1,4.946,4.945,3.525,3.525,0,0,1-1.3.781Z"
                                                transform="translate(2.25 2.25)" fill="#141124" />
                                            <path id="Shape-2" data-name="Shape"
                                                d="M3.5,7A3.5,3.5,0,1,1,7,3.5,3.5,3.5,0,0,1,3.5,7Z"
                                                transform="translate(15 2)" fill="#ff6359" />
                                        </svg>
                                        <h1 class="font-semibold text-gray-800 text-xl">Abah Marquis</h1>
                                    </div>
                                    <div class="flex justify-center items-start flex-col gap-y-3 pt-6 px-6">
                                        <NuxtLink
                                            class="text-gray-600 w-full py-2.5 px-4 text-sm font-medium rounded-md"
                                            v-for="(itm, idx) in accountNav" :key="idx" :to="itm.path">
                                            {{ itm.name }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <!-- Left column -->
                    <div class="grid grid-cols-1 gap-4">
                        <section aria-labelledby="section-1-title">
                            <h2 class="sr-only" id="section-1-title">Section title</h2>
                            <div class="overflow-hidden rounded-lg bg-white shadow">
                                <div class="p-2.5 lg:p-6">
                                    <slot />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left"><span
                        class="block sm:inline">&copy; 2021 Your Company, Inc.</span> <span class="block sm:inline">All
                        rights reserved.</span></div>
            </div>
        </footer>
    </div>

</template>

<script setup lang="ts">
import Swal from "sweetalert2";
const route = useRoute()
const router = useRouter()
const showProfileOptions = ref(false)
const accountNav = ref([
    {
        name: 'Account Overview',
        path: '/user-dashboard/'
    },
    {
        name: 'Edit Profile',
        path: '/user-dashboard/profile'
    },
    {
        name: 'Plan Summary',
        path: '/user-dashboard/plan-summary'
    },
    {
        name: 'Manage Subscription',
        path: '/user-dashboard/subscription'
    },
    {
        name: 'Todays Tips',
        path: '/user-dashboard/promo-code'
    }
])

const showDropdown = ref(false)

const toggleMobile = (itm: any) => {
    switch (itm) {
        case 'account-overview':
            showDropdown.value = false
            router.push('/user-dashboard')
            break;
        case 'edit-profile':
            showDropdown.value = false
            router.push('/user-dashboard/profile')
            break;
        case 'plan-summary':
            showDropdown.value = false
            router.push('/user-dashboard/plan-summary')
            break;
        case 'manage-subscription':
            showDropdown.value = false
            router.push('/user-dashboard/subscription')
            break;
        case 'promo-code':
            showDropdown.value = false
            router.push('/user-dashboard/promo-code')
            break;
    }
}

const logOut = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
        cancelButtonText: "Nah, Just Kidding!",
    }).then((result) => {
        if (result.value) {
            localStorage.clear();
            router.push({ path: '/auth', query: { type: 'login' } })
        } else {
            Swal.fire("Cancelled", "Action was cancelled", "info");
        }
    });
};
</script>


<style scoped>
.router-link-exact-active {
    background-color: #F4FBFE;
    color: #357392
}
</style>