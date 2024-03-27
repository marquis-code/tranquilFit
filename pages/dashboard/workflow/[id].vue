<template>
    <main>
        <button @click="$router.back()" class="text-white bg-black rounded-full text-sm mb-4 px-4 py-2">Go Back</button>
        <section class="space-y-6">
            <div>
                <h1 class="font-semibold text-lg text-gray-800">{{ workflowToDisplay.workflowName }}</h1>
                <p class="text-sm font-medium text-gray-600">{{ workflowToDisplay.workflowDescription }}</p>
            </div>
            <ol>
                <li class="border-l-2 border-purple-600" v-for="(itm, idx) in workflowToDisplay.steps" :key="idx">
                    <div class="md:flex flex-start">
                        <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z">
                                </path>
                            </svg>
                        </div>
                        <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                            <div class="flex justify-between mb-4">
                                <a href="#!"
                                    class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">New
                                    {{ itm.title }}</a>
                                <a href="#!"
                                    class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{{
            new
                Date().toISOString() }}</a>
                            </div>
                            <p class="text-gray-700 mb-6 text-sm md:text-base">{{ itm.description }}</p>
                            <div class="flex items-center gap-x-3">
                                <button type="button"
                                    class="inline-block px-4 py-1.5 text-green-600 font-medium text-xs leading-tight uppercase rounded shadow-md bg-green-200 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-mdb-ripple="true">Approve</button>
                                <button type="button"
                                    class="inline-block px-3.5 py-1 border-2 border-red-300 text-red-600 font-medium text-xs leading-tight uppercase rounded bg-red-200 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    data-mdb-ripple="true">Reject</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
        </section>
    </main>
</template>

<script setup lang="ts">
import { useFetchWorkflows } from '@/composables/workflow/fetchWorkflows'
const { fetchWorkflows, workflowList, loading: fetching } = useFetchWorkflows()
definePageMeta({
    layout: 'dashboard'
})

fetchWorkflows()

const workflowToDisplay = computed(() => {
    return workflowList.value.find((workflow: any) => workflow.id === useRoute().params.id)
})
</script>