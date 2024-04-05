<template>
    <main>
        <button @click="$router.back()" class="text-white bg-black rounded-full text-sm mb-4 px-4 py-2">Go Back</button>
        <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Workflows Details</h1>
                <p class="mt-2 text-sm text-gray-700">A brief information lto show workflow details</p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button @click="showSlideOver = true"
                    class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Add
                    Steps</button>
            </div>
        </div>
        <div v-if="!loading && Object.keys(workflowObject).length" class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl class="-my-3 divide-y divide-gray-100 text-sm">
                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Name</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ workflowObject.name || 'N/A' }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Description</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ workflowObject.description || 'N/A' }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Status</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ workflowObject.status || 'N/A' }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Steps</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ workflowObject.steps || 'N/A' }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Created At</dt>
                    <dd class="text-gray-700 sm:col-span-2">
                        {{ workflowObject.createdAt || 'N/A' }}
                    </dd>
                </div>
            </dl>
        </div>
        <EmptyState v-if="!loading && !Object.keys(workflowObject).length"  title="No Data available" desc="Please add steps to preview" />

        <div v-if="showSlideOver" class="relative z-50" aria-labelledby="slide-over-title" role="dialog"
            aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0"></div>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <div class="pointer-events-auto w-screen max-w-md">
                            <section class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                <div class="h-0 flex-1 overflow-y-auto">
                                    <div class="bg-indigo-700 px-4 py-6 sm:px-6">
                                        <div class="flex items-center justify-between">
                                            <h2 class="text-base font-semibold leading-6 text-white"
                                                id="slide-over-title">Create New Step</h2>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button @click="showSlideOver = false" type="button"
                                                    class="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                                    <span class="absolute -inset-2.5"></span>
                                                    <span class="sr-only">Close panel</span>
                                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="mt-1">
                                            <p class="text-sm text-indigo-300">Get started by filling in the information
                                                below to create your new workflow step.</p>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col justify-between">
                                        <div class="divide-y divide-gray-200 px-4 sm:px-6">
                                            <div class="space-y-6 pb-5 pt-6">
                                                <div>
                                                    <label for="project-name"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                                    <div class="mt-2">
                                                        <input placeholder="Enter step title" v-model="form.title"
                                                            type="text" name="project-name" id="project-name"
                                                            class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                    </div>
                                                </div>
                                                <div>
                                                    <label for="description"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                                    <div class="mt-2">
                                                        <textarea placeholder="Describe step" v-model="form.description"
                                                            id="description" name="description" rows="4"
                                                            class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                                    </div>
                                                </div>
                                                <div class="flex px-4 py-4 justify-end items-end">
                                                    <button type="button"
                                                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Reset</button>
                                                    <button @click="handleStepSave" type="button"
                                                        class="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                                                </div>
                                                <section class="space-y-3" v-if="stepsArray.length">
                                                    <div>
                                                        <h1 class="text-lg font-semibold">Steps Preview</h1>
                                                        <p class="text-sm text-gray-600 font-medium">Here is a preview
                                                            of
                                                            the steps you have added</p>
                                                    </div>
                                                    <div class="border-l-2">
                                                        <!-- Card 1 -->
                                                        <div v-for="(step, sIndex) in stepsArray" :key="sIndex"
                                                            class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                                            <!-- Dot Follwing the Left Vertical Line -->
                                                            <div
                                                                class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                                                            </div>

                                                            <!-- Line that connecting the box with the vertical line -->
                                                            <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0">
                                                            </div>

                                                            <!-- Content that showing in the box -->
                                                            <div class="flex-auto">
                                                                <h1 class="text-sm font-bold">{{ step.title }}</h1>
                                                                <p class="text-xs font-light">{{ step.description }}
                                                                </p>
                                                            </div>
                                                            <a href="#"
                                                                class="text-center text-sm bg-white rounded-full p-2 shadow-md text-white hover:text-gray-300">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                    height="16" viewBox="0 0 24 24" fill="none"
                                                                    stroke="#4a4a4a" stroke-width="2.5"
                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </section>
                                                <EmptyState title="No Steps available"
                                                    desc="Please add steps to preview" v-else />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-shrink-0 justify-end px-4 py-4">
                                    <button type="button"
                                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                                    <button :disabled="processing" type="button" @click="addStepToWorkflow"
                                        class="ml-4 inline-flex justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
            processing
                                        ? 'processing...' : 'Submit'}}</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script setup lang="ts">
import { useGetWorkflowById } from '@/composables/workflow/id'
const { getWorkflowById, workflowObject, loading } = useGetWorkflowById()
import { useAddStepToWorkflow } from '@/composables/workflow/addStep'
const { addStepToWorkflow, loading: processing, stepsArray, handleTemporarySave, step } = useAddStepToWorkflow()
definePageMeta({
    layout: 'dashboard'
})

const form = ref({
    title: '',
    description: ''
})

const handleStepSave = () => {
    handleTemporarySave(form.value)
    form.value.title = ''
    form.value.description = ''
}

const showSlideOver = ref(false)
getWorkflowById()
</script>