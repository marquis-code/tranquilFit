<template>
    <main class="space-y-6">
        <div class="rounded-lg shadow-lg bg-white border-[0.2px] p-6 space-y-6">
            <div class="space-y-6">
                <h1 class="font-semibold text-gray-500 text-base">CURRENT PLAN</h1>
                <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div
                        class="border rounded-lg flex gap-x-6 font-semibold items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-b-xl">
                        <img src="@/assets/img/meal.jpg" class="rounded-tl-lg rounded-bl-lg h-44" />
                        <p class="p-2 text-white flex items-center gap-x-3 text-sm lg:text-base">CONQUER CRAVINGS
                            <span
                                class="inline-block p-1 rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"
                                    fill="none" stroke="#4a90e2" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg>
                            </span>
                        </p>
                    </div>
                    <div class="lg:divide-y divide-gray-100">
                        <p class="text-sm text-gray-500 flex items-center gap-x-2 pb-3"><span
                                class="inline-block rounded-full shadow-md bg-white p-1 border-[0.4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="#4a90e2" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </span>Manage cravings</p>
                        <p class="text-sm text-gray-500 flex items-center gap-x-2 py-3"><span
                                class="inline-block rounded-full shadow-md bg-white p-1 border-[0.4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="#4a90e2" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </span> No off-limit foods</p>
                        <p class="text-sm text-gray-500 flex items-center gap-x-2 py-3"><span
                                class="inline-block rounded-full shadow-md bg-white p-1 border-[0.4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="#4a90e2" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </span>Generally healthy</p>
                    </div>
                </section>

            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white border-[0.2px] p-6">
            <h1 class="font-semibold text-gray-500 text-base">ADDITIONAL PLANS <span class="text-xs font-light">Want
                    a different plan? Select a plan below.</span></h1>
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div v-for="(itm, idx) in plans" :key="idx"
                    class="w-full max-w-md px-2 py-4 mt-10 space-y-4 bg-white border-gray-50 border-[0.2px] rounded-lg shadow-lg ">
                    <div class="flex justify-center -mt-10 mr-9 md:justify-end">
                        <img class="object-cover w-12 h-12 border-2 bg-gray-500 border-blue-500 rounded-full dark:border-blue-400"
                            alt="Testimonial avatar" src="@/assets/img/meal.jpg">
                    </div>

                    <div class="flex justify-center items-center flex-col">
                        <h2 class="mt-2 text-xs font-semibold text-gray-800 md:mt-0">{{ itm.name }}</h2>

                        <p class="mt-2 text-[10px] font-light leading-relaxed text-center text-gray-500">{{ itm.desc }}
                        </p>

                        <div class="flex justify-center items-center mt-4" v-if="itm.isPro">
                            <a href="#"
                                class="bg-gradient-to-r text-white text-sm px-3 rounded-sm from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                                tabindex="0" role="link">pro</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user-dashboard'
})

const plans = ref([
    {
        name: 'Better Balance',
        desc: 'Prioritize fresh, clean eating with minimal ingredients',
        isPro: true
    },
    {
        name: 'Keeping Keto',
        desc: 'Go low-carb, high fat to accelerate fat burn',
        isPro: true
    },
    {
        name: 'Sugar Smart',
        desc: 'Kick your sugar addiction and get lean with this no-nonsense plan.',
        isPro: false
    },
    {
        name: 'Carb Conscious',
        desc: 'Go low-carb to achieve optimal energy levels',
        isPro: false
    },
    {
        name: 'Calorie Command',
        desc: 'Stick to classic calorie-focused plan',
        isPro: false
    }
])
</script>