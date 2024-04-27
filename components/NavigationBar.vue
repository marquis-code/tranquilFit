<template>
    <main>
        <nav class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <button type="button" @click="showSidebar = true"
                            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <img class="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company">
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <a href="#" @click="toggleDropdown('solutions')" :class="[activeDropdown === 'solutions' ? 'bg-gray-900 text-white' : 'text-gray-300']"
                                    class="rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page">Solutions</a>
                                <a href="#" @click="toggleDropdown('partnerWithUs')" :class="[activeDropdown === 'partnerWithUs' ? 'bg-gray-900 text-white' : 'text-gray-300']"
                                    class="rounded-md px-3 py-2 text-sm font-medium">Partner
                                    with us</a>
                                <a href="#" @click="toggleDropdown('resources')" :class="[activeDropdown === 'resources' ? 'bg-gray-900 text-white' : 'text-gray-300']"
                                    class=" rounded-md px-3 py-2 text-sm font-medium">Resources</a>
                                <a href="#" @click="toggleDropdown('company')" :class="[activeDropdown === 'company' ? 'bg-gray-900 text-white' : 'text-gray-300']"
                                    class=" rounded-md px-3 py-2 text-sm font-medium">Company</a>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button"
                            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">View notifications</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <!-- Profile dropdown -->
                        <div class="relative ml-3">
                            <div>
                                <button @click="showProfile = !showProfile" type="button"
                                    class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
      
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                            <div v-if="showProfile"
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                tabindex="-1">
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-0">Your Profile</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-1">Settings</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-2">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <!-- <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                        aria-current="page">Dashboard</a>
                    <a href="#"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                    <a href="#"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                    <a href="#"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                </div>
            </div> -->
        </nav>

        <!-- Dropdowns -->
        <div v-if="activeDropdown === 'solutions'" class="absolute w-full z-50 bg-white" data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div class="bg-white shadow-lg">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <!-- Content for Solutions dropdown -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <h3 class="text-3xl font-semibold text-[#2D293D]">Solutions</h3>
                            <p class="text-base mt-1 text-[#2D293D]">Digital programs for metabolic, emotional, and
                                physical health transform outcomes and lower costs.</p>
                            <a href="#" class="mt-2 inline-block text-purple-600 hover:text-purple-800">Need Help?</a>
                        </div>
                        <div class="md:col-span-2 grid grid-cols-3 gap-4">
                            <a href="#" class="block text-center">
                                <img src="@/assets/img/slim.jpg" alt="Metabolic Health"
                                    class="mx-auto h-24 w-24 object-cover rounded-md mb-3" />
                                <span class="text-sm font-medium">Metabolic Health</span>
                            </a>
                            <a href="#" class="block text-center">
                                <img src="@/assets/img/slim.jpg" alt="Metabolic Health"
                                    class="mx-auto h-24 w-24 object-cover rounded-md mb-3" />
                                <span class="text-sm font-medium">Metabolic Health</span>
                            </a>
                            <a href="#" class="block text-center">
                                <img src="@/assets/img/slim.jpg" alt="Metabolic Health"
                                    class="mx-auto h-24 w-24 object-cover rounded-md mb-3" />
                                <span class="text-sm font-medium">Metabolic Health</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="activeDropdown === 'partnerWithUs'" class="absolute w-full z-50 bg-white" data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div class="bg-white shadow-lg">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <!-- Content for Solutions dropdown -->
                    <fieldset>
                        <legend class="sr-only">Notifications</legend>
                        <div class="space-y-5">
                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="comments" class="font-semibold text-lg text-[#2D293D]">Employers</label>
                                    <p id="comments-description" class="text-gray-500">
                                        Transform the quality of life and health of your workforce while preventing and
                                        reducing the cost of chronic health conditions</p>
                                </div>
                            </div>
                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="candidates" class="font-semibold text-lg text-[#2D293D]">Health
                                        Plans</label>
                                    <p id="candidates-description" class="text-gray-500">Achieve maximum member value
                                        and ROl from your Wondr Health benefit</p>
                                </div>
                            </div>
                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="offers" class="font-semibold text-lg text-[#2D293D]">Benefit
                                        Consultants</label>
                                    <p id="offers-description" class="text-gray-500">Deliver a comprehensive well-being
                                        solution that drives long-term health outcomes and clear ROl for your clients
                                    </p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>

        <div v-if="activeDropdown === 'resources'" class="absolute w-full z-50 bg-white" data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div class="bg-white shadow-lg">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6">
                    <p id="comments-description" class="text-gray-500">
                        Explore clinical research, program proof points and inspiration to guide your wellness journey
                    </p>
                    <div class="ml-3 text-sm leading-6">
                        <label for="comments" class="font-semibold text-lg text-[#2D293D]">Peer-reviewed clinical
                            research</label>
                        <p id="comments-description" class="text-gray-500">
                            Learn how we improve quality of life and health outcomes with our clinical research</p>
                    </div>
                    <fieldset>
                        <legend class="sr-only">Notifications</legend>
                        <div class="space-y-5">
                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="comments" class="font-semibold text-lg text-[#2D293D]">Thought
                                        Leadership</label>
                                    <p id="comments-description" class="text-gray-500">
                                        Gain insights and expert analysis on the latest in metabolic and emotional
                                        health</p>
                                </div>
                            </div>
                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="candidates" class="font-semibold text-lg text-[#2D293D]">Blog</label>
                                    <p id="candidates-description" class="text-gray-500">Meet our leadership team, our
                                        clinical experts, and our board of directors</p>
                                </div>
                            </div>
                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="offers" class="font-semibold text-lg text-[#2D293D]">Webinars and
                                        events</label>
                                    <p id="offers-description" class="text-gray-500">View our webinars and connect with
                                        us at upcoming events</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>

        <div v-if="activeDropdown === 'company'" class="absolute w-full z-50 bg-white" data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div class="bg-white shadow-lg">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <fieldset>
                        <legend class="sr-only">Notifications</legend>
                        <div class="space-y-5">
                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="comments" class="font-semibold text-lg text-[#2D293D]">Who we
                                        are</label>
                                    <p id="comments-description" class="text-gray-500">A proven wellness leader in
                                        digital behavior transformation</p>
                                </div>
                            </div>
                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="candidates" class="font-semibold text-lg text-[#2D293D]">Our
                                        people</label>
                                    <p id="candidates-description" class="text-gray-500">Meet our leadership team, our
                                        clinical experts, and our board of directors</p>
                                </div>
                            </div>
                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="offers" class="font-semibold text-lg text-[#2D293D]">News</label>
                                    <p id="offers-description" class="text-gray-500">See our latest announcements, press
                                        releases, coverage, media kit and more</p>
                                </div>
                            </div>

                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="offers" class="font-semibold text-lg text-[#2D293D]">Careers</label>
                                    <p id="offers-description" class="text-gray-500">Find open positions to join our
                                        WONDRful team</p>
                                </div>
                            </div>

                            <div class="relative flex items-start">
                                <div class="ml-3 text-sm leading-6">
                                    <label for="offers" class="font-semibold text-lg text-[#2D293D]">Contact Us</label>
                                    <p id="offers-description" class="text-gray-500">For more information on Wondr
                                        Health solutions</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
        <!-- ... Other dropdowns -->

        <div v-if="showSidebar" class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
            <!--
              Off-canvas menu backdrop, show/hide based on off-canvas menu state.
        
              Entering: "transition-opacity ease-linear duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "transition-opacity ease-linear duration-300"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <div class="fixed inset-0 bg-gray-900/80"></div>

            <div class="fixed inset-0 flex">
                <!--
                Off-canvas menu, show/hide based on off-canvas menu state.
        
                Entering: "transition ease-in-out duration-300 transform"
                  From: "-translate-x-full"
                  To: "translate-x-0"
                Leaving: "transition ease-in-out duration-300 transform"
                  From: "translate-x-0"
                  To: "-translate-x-full"
              -->
                <div class="relative mr-16 flex w-full max-w-xs flex-1">
                    <!--
                  Close button, show/hide based on off-canvas menu state.
        
                  Entering: "ease-in-out duration-300"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "ease-in-out duration-300"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                    <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button type="button" class="-m-2.5 p-2.5" @click="showSidebar = false">
                            <span class="sr-only">Close sidebar</span>
                            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <!-- Sidebar component, swap this element with another sidebar if you like -->
                    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                        <div class="flex h-16 shrink-0 items-center">
                            <img class="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company">
                        </div>
                        <nav class="flex flex-1 flex-col">
                            <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" class="-mx-2 space-y-3">
                                        <li>
                                            <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                                            <NuxtLink href="#feature-section" @click.native="showSidebar = false"
                                                class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                </svg>
                                                Solutions
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink href="#performance-stats" @click.native="showSidebar = false"
                                                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                </svg>
                                                Partner with us
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink href="#product-guide" @click.native="showSidebar = false"
                                                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                                </svg>
                                                Resources
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink href="#product-types" @click.native="showSidebar = false"
                                                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                                </svg>
                                                Company
                                            </NuxtLink>
                                        </li>
                                        <!-- <li>
                                            <a href="#"
                                                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                                </svg>
                                                Documents
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                                </svg>
                                                Reports
                                            </a>
                                        </li> -->
                                    </ul>
                                </li>
                                <!-- <li>
                                    <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                    <ul role="list" class="-mx-2 mt-2 space-y-1">
                                        <li>
                                            <a href="#"
                                                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <span
                                                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">H</span>
                                                <span class="truncate">Heroicons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <span
                                                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">T</span>
                                                <span class="truncate">Tailwind Labs</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                <span
                                                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">W</span>
                                                <span class="truncate">Workcation</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="mt-auto">
                                    <a href="#"
                                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                                        <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Settings
                                    </a>
                                </li> -->
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const showSidebar = ref(false)
const showProfile = ref(false)
const activeDropdown = ref('') as any

const showResourcesDropdown = ref(false)

const toggleDropdown = (menu: any) => {
    if (activeDropdown.value === menu) {
        activeDropdown.value = ''
    } else {
        activeDropdown.value = menu
    }
}
</script>