<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Workflows</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all workflows</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <NuxtLink to="/dashboard/workflow/new"
          class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add
          Workflow</NuxtLink>
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
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Cerated By</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Organization ID</th>
                  <!-- <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th> -->
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(itm, idx) in workflowList" :key="idx">
                  <td @click="viewWorkflow(itm)"
                    class="whitespace-nowrap cursor-pointer py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {{ itm.workflowName }}
                  </td>
                  <td @click="viewWorkflow(itm)"
                    class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.workflowDescription
        ||
        'N/A' }}</td>
                  <td @click="viewWorkflow(itm)"
                    class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.workflowSteps ||
        'N/A'
                    }}</td>
                  <td @click="viewWorkflow(itm)"
                    class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.createdBy || 'N/A'
                    }}</td>
                  <td @click="viewWorkflow(itm)"
                    class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.organizationId ||
                    'N/A' }}
                  </td>
                  <!-- <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href="" @click.prevent="handleDeleteOrganization(itm.id)"
                      class="text-indigo-600 hover:text-indigo-900">Delete<span class="sr-only">
                      </span></a>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <EmptyState title="No Organization available" desc="Please add an organization" v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchWorkflows } from '@/composables/workflow/fetchWorkflows'
import { useDeleteOrganization } from '@/composables/organization/delete'
import { useConfirmationModal } from '@/composables/core/useConfirmationModal'
const { openModal } = useConfirmationModal()
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

function openDeleteConfirmation() {
  openModal('Are you sure you want to delete this user?', () => {
    console.log('User deletion confirmed.')
    // Add logic to delete the user here.
  })
}
// const notify = () => {
//   useNuxtApp().$toast.info('Hello World.\n I am <b>Tom</b>', {
//     autoClose: 5000,
//     dangerouslyHTMLString: true,
//   });
// };
</script>