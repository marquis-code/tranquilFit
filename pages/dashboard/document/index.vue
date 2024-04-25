<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8">

      <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Documents</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all documents</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 flex items-center gap-x-6 sm:flex-none">
          <div>
            <p class="text-sm text-gray-700">Filter by workflow:</p>
            <select v-model="selectedWorkflowId" class="border border-gray-500 py-1.5 rounded-md">
              <option v-for="(itm, idx) in workflowList" :value="itm.id" :key="idx">{{ itm.name || 'N/A' }}</option>
            </select>
          </div>
          <button @click="showModal = true"
            class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add
            Document</button>
        </div>
      </div>
      <div class="flow-root">
        <div v-if="documentList.length && !loading" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      No
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Steps</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Steps Completed
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">CreatedAt</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="(itm, idx) in documentList" :key="idx">
                    <td
                      class="whitespace-nowrap cursor-pointer py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {{ idx + 1 || 'N/A' }}
                    </td>
                    <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{
              itm.workflow.description ||
              'N/A'
              ||
              'N/A' }}</td>
                    <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">
                      <span v-if="itm.workflow.steps.length"> {{ itm.workflow.steps.length || 'N/A' }}</span>
                      <span v-else class="text-sm text-gray-500 font-semibold">No step has been added to this
                        workflow </span>
                    </td>
                    <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">
                      {{ itm.stepsCompleted || 'Nil' }}
                    </td>
                    <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.workflow.status
              ||
              'N/A' }}
                    </td>
                    <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{
              itm.workflow.createdAt ||
              'N/A' }}
                    </td>
                    <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">
                      <div class="flex justify-between items-center">
                        <button @click="viewDocument(itm)" class="bg-black text-white px-3 py-2 rounded-md text-sm">View
                          details</button>
                        <!-- <nuxt-link :to="`/dashboard/document/workflow/${itm.workflow.id}`"
                          class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Get document by workflow</nuxt-link> -->
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div v-else-if="loading && !documentList.length"
          class="bg-white rounded-lg shadow-md p-4 animate-pulse">
          <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
        </div>
        <EmptyState title="No Documents available" desc="Please add a document" v-else />
      </div>
    </div>

    <CoreBaseModal :show="showModal" @update:show="showModal = $event">
      <section>
        <form class="space-y-8" @submit.prevent="createDocument">
          <h1 class="font-semibold text-gray-800 text-center text-lg">Create new document</h1>

          <div>
            <label for="workflowId" class="block text-sm font-medium leading-6 text-gray-900">Workflow Id:</label>
            <input placeholder="Enter workflow id" v-model="documentPayload.workflowId" type="tel" name="workflowId"
              id="workflowId"
              class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>

          <div class="w-full pb-3">
            <button :disabled="creating || !isCreateFormEmpty"
              class="w-full disabled:cursor-not-allowed disabled:opacity-25 bg-green-500 text-white py-2.5 rounded-md">{{
              creating ? 'processing..' : 'Submit' }}</button>
          </div>
        </form>
      </section>
    </CoreBaseModal>
  </main>
</template>

<script setup lang="ts">
import { useGetDocumentByWorkflowId } from '@/composables/document/getDocumentByWorkflow'
import { useCreateDocument } from '@/composables/document/create'
import { useFetchWorkflows } from '@/composables/workflow/fetchWorkflows'
import { useGetAllDocuments } from '@/composables/document/getAllDocuments'
const { getDocuments, documentsList, loading: loadingDocuments } = useGetAllDocuments()
const { createDocument, documentPayload, loading: creating, isCreateFormEmpty } = useCreateDocument()
const { fetchWorkflows, workflowList, loading: fetching } = useFetchWorkflows()
const { getDocumentByWWorkflowId, documentList, loading } = useGetDocumentByWorkflowId()

definePageMeta({
  layout: 'dashboard'
})

fetchWorkflows()

const showModal = ref(false);
const form = ref({
  workflowId: ''
})

const viewDocument = (data: any) => {
  useRouter().push(`/dashboard/document/${data.id}`)
}

const selectedWorkflowId = ref('')

watch(selectedWorkflowId, (val: string) => {
  getDocumentByWWorkflowId(val)
})

getDocuments()

const computedDocumentList = computed(() => {
  return selectedWorkflowId.value ? documentList.vale : documentsList.value
})
</script>