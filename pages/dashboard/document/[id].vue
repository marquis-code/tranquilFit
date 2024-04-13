<template>
    <main>
        <button @click="$router.back()" class="text-white bg-black rounded-full text-sm mb-4 px-4 py-2">Go Back</button>
        <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Document Details</h1>
                <p class="mt-2 text-sm text-gray-700">A brief information lto show document details</p>
            </div>
            <fieldset>
                <legend class="sr-only">Notifications</legend>
                <div class="space-y-5">
                    <div class="relative flex items-start">
                        <div class="flex h-6 items-center">
                            <input v-model="isFilterBySteps" id="comments" aria-describedby="comments-description"
                                name="comments" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                        </div>
                        <div class="ml-3 text-sm leading-6">
                            <label for="comments" class="font-medium text-gray-900">Filter by:</label>
                            <p id="comments-description" class="text-gray-500">Filter by steps</p>
                        </div>
                    </div>
                </div>
            </fieldset>

        </div>
        <section v-if="isFilterBySteps === true">
            <div v-if="documentSteps.length && !loadingDocumentSteps"
                class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        ID</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Step Title</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Step Description</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Completed At</th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span class="sr-only">add event</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr v-for="(itm, idx) in documentSteps" :key="idx">
                                    <td
                                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        {{ itm.id || 'Nil' }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{
            itm.step.title ||
            'N/A' }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{
            itm.step.description ||
            'N/A' }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{
            itm.completedAt || 'N/A'
        }}</td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                        <button @click="handleSelectedStep(itm)"
                                            class="text-indigo-600 hover:text-indigo-900">add event<span
                                                class="sr-only">, Lindsay Walton</span></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div v-else-if="loadingDocumentSteps && !documentSteps.length"
                class="bg-white rounded-lg shadow-md p-4 animate-pulse">
                <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
            </div>
            <EmptyState title="No Organization available" desc="Please add an organization" v-else />
        </section>
        <section v-else>
            <div v-if="!loading && Object.keys(documentObject).length"
                class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl class="-my-3 divide-y divide-gray-100 text-sm">
                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Name</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ documentObject.workflow.name || 'N/A' }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Steps Completed</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ documentObject.stepsCompleted || 'N/A' }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Description</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ documentObject.workflow.description || 'N/A' }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Status</dt>
                        <dd class="text-gray-700 sm:col-span-2">
                            <div class="flex justify-between items-center">
                                <p> {{ documentObject.workflow.status || 'N/A' }}</p>
                            </div>
                        </dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Steps</dt>
                        <dd v-if="documentObject.workflow.length" class="text-gray-700 sm:col-span-2">
                            <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                                <div v-for="(item, idx) in documentObject.workflow.steps" :key="idx"
                                    class="-ml-4 -mt-4 flex flex-wrap border-gray-400 border-b-[0.6px] last:border-b-0 py-2 items-center justify-between sm:flex-nowrap">
                                    <div class="ml-4 mt-4">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900"><span
                                                class="text-sm font-medium text-gray-500">Title:</span> {{
            item.title }}</h3>
                                        <p class="mt-1 text-sm text-gray-900"><span
                                                class="text-sm font-medium text-gray-500">Description:</span> {{
            item.description }}</p>
                                        <p class="mt-1 text-sm text-gray-900"><span
                                                class="text-sm font-medium text-gray-500">Created At:</span> {{
            item.createdAt }}</p>
                                    </div>
                                </div>
                            </div>
                        </dd>
                        <dd v-else class="text-gray-700 sm:col-span-2">Nil</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Created At</dt>
                        <dd class="text-gray-700 sm:col-span-2">
                            {{ documentObject.workflow.createdAt || 'N/A' }}
                        </dd>
                    </div>
                </dl>
            </div>
            <div v-else-if="loading && !Object.keys(documentObject).length"
                class="bg-white rounded-lg shadow-md p-4 animate-pulse">
                <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
            </div>
            <EmptyState v-else title="No Data available" desc="Please add steps to preview" />
        </section>

        <CoreBaseModal :show="showModal" @update:show="showModal = $event">
            <form class="space-y-8" @submit.prevent="handleFormSubmission">
                <h1 class="font-semibold text-gray-800 text-center text-lg">Add Event To Step</h1>

                <div>
                    <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Type</label>
                    <select v-model="form.type" id="location" name="location"
                        class="mt-2 block w-full outline-none rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option v-for="itm in eventTypes" :key="itm.value" :value="itm.value">{{ itm.text }}</option>
                    </select>
                </div>
                <div v-if="form.type === 'TYPE_COMMENT'">
                    <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
                    <textarea cols="4" rows="4" v-model="form.message"
                        class="mt-2 block w-full outline-none rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>

                <div class="w-full pb-3">
                    <button :disabled="processing"
                        class="w-full disabled:cursor-not-allowed disabled:opacity-25 bg-green-500 text-white py-2.5 rounded-md">{{
                        processing ? 'processing..' : 'Submit' }}</button>
                </div>
            </form>
        </CoreBaseModal>
    </main>
</template>

<script setup lang="ts">
import { useAddEventToStep } from '@/composables/document/addEventToStep'
import { useGetStepsByDocumentId } from '@/composables/document/getDocumentSteps'
import { useGetDocumentById } from '@/composables/document/getDocumentById'
const { getDocumentById, documentObject, loading } = useGetDocumentById()
const { handleAddEventToStep, populateRequestPayload, loading: processing } = useAddEventToStep()
const { getStepsByDocumentId, documentSteps, loading: loadingDocumentSteps } = useGetStepsByDocumentId()
definePageMeta({
    layout: 'dashboard'
})

const eventTypes = ref([
    // {
    //     text: 'Un Specified',
    //     value: 'TYPE_UNSPECIFIED'
    // },
    {
        text: 'Type Comment',
        value: 'TYPE_COMMENT'
    },
    // {
    //     text: 'Type Submission',
    //     value: 'TYPE_SUBMISSION'
    // },
    {
        text: 'Type Approval',
        value: 'TYPE_APPROVAL'
    }
])

const form = ref({
    actor: 'ACTOR_ADMIN',
    type: '',
    message: '',
    createdAt: new Date()
})


const isFilterBySteps = ref(false)

watch(isFilterBySteps, (val: any) => {
    if (val) {
        getStepsByDocumentId()
    }
})
const showModal = ref(false)
const selectedObj = ref({})

const handleSelectedStep = (item: any) => {
    selectedObj.value = item
    showModal.value = true
}

const handleFormSubmission = async () => {
    const updatedPayload = {
        actor: 'ACTOR_USER',
        type: form.value.type,
        createdAt: form.value.createdAt,
        ...(form.value.type === 'TYPE_COMMENT' && { message: form.value.message })
    }
    populateRequestPayload(updatedPayload)
    await handleAddEventToStep(useRoute().params.id, selectedObj.value.id)
    showModal.value = false
}
getDocumentById()
</script>