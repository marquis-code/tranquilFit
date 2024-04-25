<template>
    <main>
        <button @click="$router.back()" class="text-white bg-black rounded-full text-sm mb-4 px-4 py-2">Go Back</button>
        <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Workflows Details</h1>
                <p class="mt-2 text-sm text-gray-700">A brief information lto show workflow details</p>
            </div>
            <button @click="redirectedWorkflowDocuments" type="button"
                class="relative inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">View
                workflow documents</button>
        </div>
        <div v-if="!loading && Object.keys(workflowObject).length"
            class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
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
                    <dd class="text-gray-700 sm:col-span-2">
                        <div class="flex justify-between items-center">
                            <p> {{ workflowObject.status || 'N/A' }}</p>
                            <button @click="showModal = true"
                                class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Update status</button>
                        </div>
                    </dd>
                </div>
                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Steps</dt>
                    <dd v-if="workflowObject.steps.length" class="text-gray-700 sm:col-span-2">
                        <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                            <div v-for="(item, idx) in workflowSteps" :key="idx"
                                class="-ml-4 -mt-4 flex flex-wrap border-gray-400 border-b-[0.6px] last:border-b-0 py-2 items-center justify-between sm:flex-nowrap">
                                <div class="ml-4 mt-4">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900"><span
                                            class="text-sm font-medium text-gray-500">Title:</span> {{item.title }}</h3>
                                    <p class="mt-1 text-sm text-gray-900"><span
                                            class="text-sm font-medium text-gray-500">Description:</span> {{item.description }}</p>
                                    <p class="mt-1 text-sm text-gray-900"><span
                                            class="text-sm font-medium text-gray-500">Created At:</span> {{item.createdAt }}</p>
                                            <p class="mt-1 text-sm text-gray-900"><span
                                                class="text-sm font-medium text-gray-500">Fields Count:</span> {{item.fieldsCount }}</p>       
                                </div>
                                <div class="ml-4 mt-4 flex-shrink-0 flex gap-x-3 items-center">
                                    <button @click="handleUpdateForm(item)" type="button"
                                        class="relative inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Update
                                        Step</button>
                                    <button v-if="item.fieldsCount == 0" @click="handleAddFieldSlideOver(item)"
                                        type="button"
                                        class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                                        Field</button>
                                </div>
                            </div>
                        </div>
                    </dd>
                    <dd v-else class="text-gray-700 sm:col-span-2">Nil</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Created At</dt>
                    <dd class="text-gray-700 sm:col-span-2">
                        {{ workflowObject.createdAt || 'N/A' }}
                    </dd>
                </div>
            </dl>
        </div>
        <div v-else-if="loading && !Object.keys(workflowObject).length"
            class="bg-white rounded-lg shadow-md p-4 animate-pulse">
            <!-- Header -->
            <!-- <div class="w-2/3 h-4 bg-gray-300 rounded mb-2"></div> -->
            <!-- Body -->
            <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
            <!-- <div class="w-full h-8 bg-gray-300 rounded mb-2"></div>
            <div class="w-1/2 h-8 bg-gray-300 rounded"></div> -->
        </div>
        <EmptyState v-else title="No Data available" desc="Please add steps to preview" />

        <div v-if="showAddFieldSlideOver" class="relative z-50" aria-labelledby="slide-over-title" role="dialog"
            aria-modal="true">
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
                                                id="slide-over-title">Add New Field To Step {{ selectedStep.title ||
            'N/A' }}</h2>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button @click="showAddFieldSlideOver = false" type="button"
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
                                            <p class="text-sm text-indigo-300">Get started by selecting the fields you
                                                would want to add to {{ selectedStep.title || 'N/A' }} step.</p>
                                        </div>
                                    </div>
                                    <div v-if="workflowFields.length && !fetching"
                                        class="flex flex-1 flex-col justify-between p-6">
                                        <fieldset>
                                            <legend class="sr-only">Notifications</legend>
                                            <div class="space-y-5">
                                                <div class="relative flex items-start"
                                                    v-for="(itm, idx) in workflowFields" :key="idx">
                                                    <div class="flex h-6 items-center">
                                                        <input @change="onFieldChange(itm.id, $event.target.checked)"
                                                            :id="itm.name" :value="itm.id"
                                                            aria-describedby="comments-description" :name="itm.name"
                                                            type="checkbox"
                                                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                    </div>
                                                    <div class="ml-3 text-sm leading-6">
                                                        <label :for="itm.name" class="font-medium text-gray-900">{{
            itm.name ||
            'N/A' }}</label>
                                                        <p id="comments-description" class="text-gray-500">{{
            itm.description || 'N/A' }}</p>
                                                        <p id="comments-description" class="text-gray-500">{{ itm.type
            || 'N/A' }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>

                                    </div>
                                    <div v-else-if="fetching && !workflowFields.length"
                                        class="bg-white rounded-lg shadow-md p-4 animate-pulse">
                                        <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
                                    </div>
                                    <EmptyState title="No Fields available" desc="Please create Fields" v-else />
                                </div>
                                <div class="flex flex-shrink-0 justify-end px-4 py-4">
                                    <button type="button"
                                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                                    <button :disabled="processing" type="button" @click="addFieldToStep"
                                        class="ml-4 inline-flex justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
            processing
                ? 'processing...' : 'Submit' }}</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CoreBaseModal :show="showModal" @update:show="showModal = $event">
            <section class="space-y-8">
                <h1 class="font-semibold text-gray-800 text-center text-lg">Update Workflow Status</h1>

                <div>
                    <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Status:</label>
                    <select v-model="form.status" id="location" name="location"
                        class="mt-2 block w-full outline-none rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option v-for="itm in statusTypes" :key="itm.value" :value="itm.value">{{ itm.text }}</option>
                    </select>
                </div>

                <div class="w-full pb-3" @click="updateStatus">
                    <button :disabled="updating || !isUpdateFormEmpty"
                        class="w-full disabled:cursor-not-allowed disabled:opacity-25 bg-green-500 text-white py-2.5 rounded-md">{{
                        updating ? 'processing..' : 'Submit' }}</button>
                </div>

            </section>
        </CoreBaseModal>

        <CoreBaseModal :show="showUpdateStepModal" @update:show="showUpdateStepModal = $event">
            <section class="flex h-full flex-col">
                <div class="h-0 flex-1 overflow-y-auto">
                    <!-- <div class="bg-indigo-700 px-4 py-6 sm:px-6">
                        <div class="flex items-center justify-between">
                            <h2 class="text-base font-semibold leading-6 text-white" id="slide-over-title">Create New
                                Workflow
                            </h2>
                        </div>
                        <div class="mt-1">
                            <p class="text-sm text-indigo-300">Get started by filling in the information
                                below to update step field.</p>
                        </div>
                    </div> -->
                    <div class="p-4">
                        <h2 class="text-lg text-gray-900 font-semibold leading-6" id="slide-over-title">
                            Update Workflow Step
                        </h2>
                        <p class="text-sm text-gray-600">Get started by filling in the information
                            below to update workflow step.</p>
                    </div>
                    <div class="flex flex-1 flex-col justify-between">
                        <div class="divide-y divide-gray-200 px-4 sm:px-6">
                            <div class="space-y-6 pb-5 pt-6">
                                <div>
                                    <label for="project-name"
                                        class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <div class="mt-2">
                                        <input placeholder="Enter field name" v-model="selectedStep.title" type="text"
                                            name="project-name" id="project-name"
                                            class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                                <div>
                                    <label for="description"
                                        class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                    <div class="mt-2">
                                        <textarea placeholder="Describe field description"
                                            v-model="selectedStep.description" id="description" name="description"
                                            rows="4"
                                            class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-shrink-0 justify-end px-4 py-4">
                    <button type="button"
                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                    <button :disabled="updatingStep" @click="saveUpdateStep" type="button"
                        class="ml-4 inline-flex justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                        updatingStep
                        ? 'processing...' : 'Submit' }}</button>
                </div>
            </section>
            <!-- <section class="space-y-8">
                <h1 class="font-semibold text-gray-800 text-center text-lg">Update Workflow Status</h1>

                <div>
                    <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Status:</label>
                    <select v-model="form.status" id="location" name="location"
                        class="mt-2 block w-full outline-none rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option v-for="itm in statusTypes" :key="itm.value" :value="itm.value">{{ itm.text }}</option>
                    </select>
                </div>

                <div class="w-full pb-3" @click="updateStatus">
                    <button :disabled="updating || !isUpdateFormEmpty"
                        class="w-full disabled:cursor-not-allowed disabled:opacity-25 bg-green-500 text-white py-2.5 rounded-md">{{
                        updating ? 'processing..' : 'Submit' }}</button>
                </div>

            </section> -->
        </CoreBaseModal>
    </main>
</template>

<script setup lang="ts">
import { useUpdateSteps } from '@/composables/workflow/updateStep'
import { useGetWorkflowById } from '@/composables/workflow/id'
import { useUpdateWorkflowStatus } from '@/composables/workflow/updateWorkflowStatus'
import { useFetchWorkflowsFields } from '@/composables/workflow/getWorkflowsFields'
const { getWorkflowById, workflowObject, workflowSteps, loading } = useGetWorkflowById()
const { fetchWorkflowFields, workflowFields, loading: fetching } = useFetchWorkflowsFields()
import { useUpdateWorkflowSteps } from '@/composables/workflow/updateWorkflowStep'
const { updateWorkflowSteps, loading: processing, prefillPayload } = useUpdateWorkflowSteps()
const { handleStatusUpdate, loading: updating } = useUpdateWorkflowStatus()
const { updateStep, loading: updatingStep, prefillUploadForm } = useUpdateSteps()
definePageMeta({
    layout: 'dashboard'
})
const showModal = ref(false);
const showUpdateStepModal = ref(false)
fetchWorkflowFields()

const showAddFieldSlideOver = ref(false)

const selectedStep = ref({}) as any

const selectedFieldsArray = ref([]) as any

const handleAddFieldSlideOver = (data: any) => {
    selectedStep.value = data
    showAddFieldSlideOver.value = true
}

const onFieldChange = (value: string, checked: boolean) => {
    if (checked) {
        const isAlreadyExisting = selectedFieldsArray.value.includes(value)
        if (isAlreadyExisting) {
            return
        } else {
            selectedFieldsArray.value.push(value);
        }
    } else {
        const index = selectedFieldsArray.value.indexOf(value);
        if (index > -1) {
            selectedFieldsArray.value.splice(index, 1);
        }
    }
}

const addFieldToStep = () => {
    prefillPayload(selectedFieldsArray.value)
    updateWorkflowSteps(selectedStep.value.id)
}

const redirectedWorkflowDocuments = () => {
    useRouter().push(`/dashboard/document/workflow/${workflowObject.value.id}`)
}


const statusTypes = ref([
    {
        text: 'None',
        value: 'STATUS_NONE'
    },
    {
        text: 'Active',
        value: 'STATUS_ACTIVE'
    },
    {
        text: 'Maintenance',
        value: 'STATUS_MAINTENANCE'
    },
    {
        text: 'Archived',
        value: 'STATUS_ARCHIVED'
    }
])



const form = ref({
    status: ''
})

const isUpdateFormEmpty = computed(() => {
    return !!(form.value.status)
})

const updateStatus = async () => {
    await handleStatusUpdate(workflowObject.value.id, form.value)
    showModal.value = false
}

const handleUpdateForm = (item: any) => {
    selectedStep.value = item
    showUpdateStepModal.value = true
}

const saveUpdateStep = async () => {
    const updatedStep = {
        title: selectedStep.value.title,
        description: selectedStep.value.description
    }
    prefillUploadForm(updatedStep)
    await updateStep(selectedStep.value.id)
    showUpdateStepModal.value = false
}

getWorkflowById()
</script>