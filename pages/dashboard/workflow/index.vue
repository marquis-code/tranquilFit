<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8">

      <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Workflows</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all workflows</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 flex items-center gap-x-6 sm:flex-none">
          <button @click="showFieldSlide = true"
            class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add
            Field</button>
          <button @click="showWorkflowCreateSlide = true"
            class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add
            Workflow</button>
        </div>
      </div>
      <div class="flow-root">
        <div v-if="workflowList.length" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Steps</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">CreatedAt</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="(itm, idx) in workflowList" :key="idx">
                    <td @click="viewWorkflow(itm)"
                      class="whitespace-nowrap cursor-pointer py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {{ itm.name || 'N/A' }}
                    </td>
                    <td @click="viewWorkflow(itm)"
                      class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.description ||
            'N/A'
            ||
            'N/A' }}</td>
                    <td @click="viewWorkflow(itm)"
                      class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">
                      <span v-if="itm.steps.length"> {{ itm.steps || 'N/A' }}</span>
                      <span v-else class="text-sm text-gray-500 font-semibold">No step has been added to this
                        workflow</span>
                    </td>
                    <td @click="viewWorkflow(itm)"
                      class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.status ||
            'N/A' }}
                    </td>
                    <td @click="viewWorkflow(itm)"
                      class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.createdAt ||
            'N/A' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <EmptyState title="No Workflow available" desc="Please add a workflow" v-else />
      </div>
    </div>

    <div v-if="showFieldSlide" class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
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
                      <h2 class="text-base font-semibold leading-6 text-white" id="slide-over-title">Create New Field
                      </h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button @click="showFieldSlide = false" type="button"
                          class="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                          <span class="absolute -inset-2.5"></span>
                          <span class="sr-only">Close panel</span>
                          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="mt-1">
                      <p class="text-sm text-indigo-300">Get started by filling in the information
                        below to create your new step field.</p>
                    </div>
                  </div>
                  <div class="flex flex-1 flex-col justify-between">
                    <div class="divide-y divide-gray-200 px-4 sm:px-6">
                      <div class="space-y-6 pb-5 pt-6">
                        <div>
                          <label for="project-name"
                            class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                          <div class="mt-2">
                            <input placeholder="Enter field name" v-model="form.name" type="text" name="project-name"
                              id="project-name"
                              class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          </div>
                        </div>
                        <div>
                          <label for="description"
                            class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                          <div class="mt-2">
                            <textarea placeholder="Describe field description" v-model="form.desc" id="description"
                              name="description" rows="4"
                              class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                          </div>
                        </div>
                        <div>
                          <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Field
                            Type</label>
                          <div class="mt-2">
                            <select v-model="form.fieldType"
                              class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                              <option v-for="(itm, idx) in fieldTypes" :key="idx" :value="itm.value">
                                {{ itm.text }}
                              </option>
                            </select>
                          </div>
                          <!-- <div class="flex px-4 py-4 justify-end items-end">
                            <button type="button"
                              class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Reset</button>
                            <button :disabled="!isFormEmpty" @click="createField" type="button"
                              class="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                              processing
                              ? 'processing...' : 'Save'}}</button>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-shrink-0 justify-end px-4 py-4">
                  <button type="button"
                    class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                  <button :disabled="!isFormEmpty" @click="createField" type="button"
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

    <div v-if="showWorkflowCreateSlide" class="relative z-50" aria-labelledby="slide-over-title" role="dialog"
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
                      <h2 class="text-base font-semibold leading-6 text-white" id="slide-over-title">Create New Workflow
                      </h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button @click="showWorkflowCreateSlide = false" type="button"
                          class="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                          <span class="absolute -inset-2.5"></span>
                          <span class="sr-only">Close panel</span>
                          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="mt-1">
                      <p class="text-sm text-indigo-300">Get started by filling in the information
                        below to create your new step field.</p>
                    </div>
                  </div>
                  <div class="flex flex-1 flex-col justify-between">
                    <div class="divide-y divide-gray-200 px-4 sm:px-6">
                      <div class="space-y-6 pb-5 pt-6">
                        <div>
                          <label for="project-name"
                            class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                          <div class="mt-2">
                            <input placeholder="Enter field name" v-model="workflowForm.name" type="text"
                              name="project-name" id="project-name"
                              class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          </div>
                        </div>
                        <div>
                          <label for="description"
                            class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                          <div class="mt-2">
                            <textarea placeholder="Describe field description" v-model="workflowForm.description"
                              id="description" name="description" rows="4"
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
                  <button :disabled="!isWorkflowFormEmpty" @click="createFlow" type="button"
                    class="ml-4 inline-flex justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                    creating
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
import { useCreateWorkflow } from '@/composables/workflow/useWorkflow'
import { useCreateField } from '@/composables/workflow/createField'
import { useFetchWorkflows } from '@/composables/workflow/fetchWorkflows'
import { useDeleteOrganization } from '@/composables/organization/delete'
import { useConfirmationModal } from '@/composables/core/useConfirmationModal'
const { createFlow, creating, workflowForm, isFormEmpty: isWorkflowFormEmpty } = useCreateWorkflow()
const { openModal } = useConfirmationModal()
const { createField, form, processing, isFormEmpty } = useCreateField()
const { handleDeleteOrganization, loading } = useDeleteOrganization()
const { fetchWorkflows, workflowList, loading: fetching } = useFetchWorkflows()
const router = useRouter()
definePageMeta({
  layout: 'dashboard'
})
fetchWorkflows()

const viewWorkflow = (itm: any) => {
  router.push(`/dashboard/workflow/${itm.id}`)
}

const showFieldSlide = ref(false)
const showWorkflowCreateSlide = ref(false)

const fieldTypes = reactive([
  {
    text: 'None',
    value: 'TYPE_NONE'
  },
  {
    text: 'Short Text Field',
    value: 'TYPE_SHORT_TEXT'
  },
  {
    text: 'long Text Field',
    value: 'TYPE_LONG_TEXT'
  },
  {
    text: 'Number Field',
    value: 'TYPE_NUMBER'
  },
  {
    text: 'True / False Field',
    value: 'TYPE_BOOL'
  },
  {
    text: 'Field Upload Field',
    value: 'TYPE_FILE'
  },
])
</script>