<template>
    <div class="bg-white">
        <NavigationBar />
        <main>
            <div class="isolate overflow-hidden">
                <div class="flow-root bg-gray-900 py-16 sm:pt-32 lg:pb-0">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="relative z-10">
                            <h1 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                                Simple pricing, no commitment</h1>
                            <p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">Lorem ipsum
                                dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus
                                molestiae voluptatum quos odit doloribus.</p>
                            <div class="mt-16 flex justify-center">
                                <fieldset
                                    class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white">
                                    <legend class="sr-only">Payment frequency</legend>
                                    <label :class="[subscriptionDuration === 'monthly' ? 'bg-indigo-500' : '']"
                                        class="cursor-pointer rounded-full px-2.5 py-1">
                                        <input type="radio" v-model="subscriptionDuration" name="frequency"
                                            value="monthly" class="sr-only">
                                        <span>Monthly</span>
                                    </label>
                                    <label :class="[subscriptionDuration === 'annually' ? 'bg-indigo-500' : '']"
                                        class="cursor-pointer rounded-full px-2.5 py-1">
                                        <input type="radio" v-model="subscriptionDuration" name="frequency"
                                            value="annually" class="sr-only">
                                        <span>Annually</span>
                                    </label>
                                </fieldset>
                            </div>
                        </div>
                        <div
                            class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                            <svg viewBox="0 0 1208 1024" aria-hidden="true"
                                class="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
                                <ellipse cx="604" cy="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx="604"
                                    ry="512" />
                                <defs>
                                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                                        <stop stop-color="#7775D6" />
                                        <stop offset="1" stop-color="#E935C1" />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <div class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                                aria-hidden="true"></div>
                            <div
                                class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                    <h2 id="tier-starter" class="text-sm font-semibold leading-6 text-white">BASIC
                                        COACHING PLAN</h2>
                                    <div
                                        class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                        <div class="mt-2 flex items-center gap-x-4">
                                            <!-- Price, update based on frequency toggle state -->
                                            <p class="text-4xl font-bold tracking-tight text-white">65,000</p>
                                            <div class="text-sm leading-5">
                                                <p class="text-white">NGN</p>
                                                <!-- Payment frequency, update based on frequency toggle state -->
                                                <p class="text-gray-400">Billed monthly</p>
                                            </div>
                                        </div>
                                        <p class="text-gray-400">Promo price: 40k for a 2-month (60 days) coaching
                                            period.
                                        </p>
                                        <label for="Toggle1"
                                            class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                            <span>Group</span>
                                            <span class="relative">
                                                <input id="Toggle1" type="checkbox" class="hidden peer">
                                                <div
                                                    class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400">
                                                </div>
                                                <div
                                                    class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800">
                                                </div>
                                            </span>
                                            <span>Individual</span>
                                        </label>

                                        <button href="#" aria-describedby="tier-starter" @click="groupCoaching('10000')"
                                            class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 hover:bg-white/20 focus-visible:outline-white">Buy
                                            this plan</button>
                                    </div>
                                    <div class="mt-8 flow-root sm:mt-10">
                                        <ul role="list"
                                            class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white">
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Group coaching registration @ 20k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Group Weekly reviews @ 5k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Online support group @ 10k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Monthly Health Consultation @ 10k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Review of all meals posted during coaching period @10k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Review of exercise activities posted during coaching period @ 10k per
                                                month
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="relative rounded-2xl z-10 bg-white shadow-xl ring-1 ring-gray-900/10">
                                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                    <h2 id="tier-scale" class="text-sm font-semibold leading-6 text-gray-900">
                                        INTERMEDIATE COACHING PLAN</h2>
                                    <div
                                        class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                        <div class="mt-2 flex items-center gap-x-4">
                                            <!-- Price, update based on frequency toggle state -->
                                            <p class="text-4xl font-bold tracking-tight text-gray-900">160,000</p>
                                            <div class="text-sm leading-5">
                                                <p class="text-gray-900">NGN</p>
                                                <!-- Payment frequency, update based on frequency toggle state -->
                                                <p class="text-gray-500">Billed monthly</p>
                                            </div>
                                        </div>
                                        <p class="text-gray-400">Promo price: 40k for a 2-month (60 days) coaching
                                            period.
                                        </p>
                                        <label for="Toggle1"
                                            class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
                                            <span>Group</span>
                                            <span class="relative">
                                                <input id="Toggle1" type="checkbox" class="hidden peer">
                                                <div
                                                    class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400">
                                                </div>
                                                <div
                                                    class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800">
                                                </div>
                                            </span>
                                            <span>Individual</span>
                                        </label>
                                        <!-- <p class="text-gray-500">Promo price: 120k</p> -->
                                        <button href="#" aria-describedby="tier-scale" @click="privateCoaching('50000')"
                                            class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600">Buy
                                            this plan</button>
                                    </div>
                                    <div class="mt-8 flow-root sm:mt-10">
                                        <ul role="list"
                                            class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-gray-900/5 border-gray-900/5 text-gray-600">
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Individual coaching registration @ 60k month per
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Monthly Health Consultation @ 10k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Daily review of all meals posted during coaching period @60k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Daily review of all exercise activities posted during coaching period @
                                                30k per month
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                    <h2 id="tier-growth" class="text-sm font-semibold leading-6 text-white">PREMIUM
                                        COACHING PLAN
                                    </h2>
                                    <div
                                        class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                        <div class="mt-2 flex items-center gap-x-4">
                                            <!-- Price, update based on frequency toggle state -->
                                            <p class="text-4xl font-bold tracking-tight text-white">350,000</p>
                                            <div class="text-sm leading-5">
                                                <p class="text-white">NGN</p>
                                                <!-- Payment frequency, update based on frequency toggle state -->
                                                <p class="text-gray-400">Billed monthly</p>
                                            </div>
                                        </div>
                                        <p class="text-gray-400">Promo price: 40k for a 2-month (60 days) coaching
                                            period.
                                        </p>
                                        <label for="Toggle1"
                                            class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                            <span>Group</span>
                                            <span class="relative">
                                                <input id="Toggle1" type="checkbox" class="hidden peer">
                                                <div
                                                    class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400">
                                                </div>
                                                <div
                                                    class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800">
                                                </div>
                                            </span>
                                            <span>Individual</span>
                                        </label>
                                        <a href="#" aria-describedby="tier-growth"
                                            class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 hover:bg-white/20 focus-visible:outline-white">Buy
                                            this plan</a>
                                    </div>
                                    <div class="mt-8 flow-root sm:mt-10">
                                        <ul role="list"
                                            class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white">
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Dietician consultation and personalized meal plan @ 40k per plan.
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Individualised exercise coaching @ per month.
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Group exercise coaching @ per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Meal planning consultation 30k per hour
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Shopping consultation 30k per hour
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FAQ section -->
            <!-- <div class="mx-auto mt-24 max-w-7xl divide-y divide-gray-900/10 px-6 sm:mt-56 lg:px-8">
                <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                <dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
                    <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">What&#039;s the best
                            thing about Switzerland?</dt>
                        <dd class="mt-4 lg:col-span-7 lg:mt-0">
                            <p class="text-base leading-7 text-gray-600">I don&#039;t know, but the flag is a big plus.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam
                                fugiat.</p>
                        </dd>
                    </div>
                </dl>
            </div> -->
            <div class="bg-white">
                <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
                        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked
                            questions</h2>
                        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                            <div class="pt-6" v-for="item in faqs" :key="item.id">
                                <dt>
                                    <!-- Expand/collapse question button -->
                                    <button @click="toggle(item.id)" type="button"
                                        class="flex w-full items-start justify-between text-left text-gray-900"
                                        aria-controls="faq-0" aria-expanded="false">
                                        <span class="text-base font-semibold leading-7">{{ item.question }}</span>
                                        <span class="ml-6 flex h-7 items-center">
                                            <!-- <svg v-if="isClose(item.id)" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6v12m6-6H6" />
                                            </svg>
                                            <svg v-if="isOpen(item.id)" class="hidden h-6 w-6" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                            </svg> -->
                                            <svg v-if="isClose(item.id)" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6v12m6-6H6" />
                                            </svg>
                                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                            </svg>
                                            <svg v-if="isOpen(item.id)" xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a"
                                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </span>
                                    </button>
                                </dt>
                                <dd class="mt-2 pr-12" id="faq-0" v-if="isOpen(item.id)"
                                    :style="{ maxHeight: isOpen(item.id) ? `${maxHeight}px` : '0' }">
                                    <p class="text-base leading-7 text-gray-600">{{ item.answer }}</p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </main>

        <!-- Footer -->
        <footer class="mt-24 sm:mt-56" aria-labelledby="footer-heading">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div class="space-y-8">
                        <img class="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Company name">
                        <p class="text-sm leading-6 text-gray-600">Making the world a better place through constructing
                            elegant hierarchies.</p>
                        <div class="flex space-x-6">
                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                <span class="sr-only">Facebook</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                <span class="sr-only">Instagram</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                <span class="sr-only">X</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                <span class="sr-only">GitHub</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gray-500">
                                <span class="sr-only">YouTube</span>
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Analytics</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Commerce</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Insights</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-10 md:mt-0">
                                <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">API
                                            Status</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-10 md:mt-0">
                                <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p class="text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>

</template>

<script setup lang="ts">
import { useFlutterwaveSDK } from '@/composables/payment/flutterwave'
const { handlePayment, paymentForm, setAmount } = useFlutterwaveSDK()

const privateCoaching = (amount: number) => {
    setAmount(amount)
    handlePayment()
}

const subscriptionDuration = ref('monthly')

const basicIndividualPlan = ref([])

const basicGroupPlan = ref([])

const intermediateIndividualPlan = ref([])

const intermediateGroupPlan = ref([])

const premiumIndividualPlan = ref([])

const premiumGroupPlan = ref([])

const groupCoaching = (amount: number) => {
    setAmount(amount)
    handlePayment()
}

const faqs = ref([
    {
        id: 1, question: 'What is Academy of Africana Indigenous Religions, Theology and Arts', answer: `The Academy of Africana Indigenous Religions, Theology and Arts is an association for the study of the Indigenous Religions, Theology and Arts
of Africa and its Diaspora. Academy of Africana Indigenous Religions, Theology and Arts is an international member society for the study of
history, philosophy, sociology, psychology, theology, spirituality theory and praxis of
Africana Religions and Theology.`
    },
    {
        id: 2, question: 'What is Academy of Africana Indigenous Religions, Theology and Arts Lab', answer: 'At the heart of innovation, Academy of Africana Indigenous Religions, Theology and Arts Lab transcends traditional boundaries, uniting Academics, Practitioners, and communities worldwide. Our mission is to explore the rich tapestry of Indigenous Religions, Theology, and Arts of Global Africa, creating a unique nexus for research, study, and collaboration.'
    },
    {
        id: 3,
        question: `What is Academy of Africana Indigenous Religions, Theology and Arts Journal
`,
        answer: 'The Academy of Africana Indigenous Religions, Theology and Arts journal is a unique nexus for research, study, and collaboration across the world. The journal is made up of publications by members of the Academy of Africana Indigenous Religions, Theology and Arts community'
    }
])

const maxHeight = ref(0)
const openId = ref(null)
const toggle = (id: any) => {
    openId.value = openId.value === id ? null : id
    // Adjust maxHeight to fit your content or calculate dynamically
    maxHeight.value = openId.value ? 200 : 0 // Example static height
}
const isOpen = (id: any) => {
    return openId.value === id
}
const isClose = (id: any) => {
    return openId.value !== id
}
</script>