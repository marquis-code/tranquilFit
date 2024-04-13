<template>
    <main>
        <div class="px-4 sm:px-6 lg:px-8">

            <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-900">Workflow Documents</h1>
                    <p class="mt-2 text-sm text-gray-700">A list of all completed workflow documents</p>
                </div>
            </div>
            <div class="flow-root">
                <div v-if="documentList.length && !loading" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Description</th>
                                        <th scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Steps</th>
                                        <th scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status
                                        </th>
                                        <th scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">CreatedAt
                                        </th>
                                        <th scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr v-for="(itm, idx) in documentList" :key="idx">
                                        <td
                                            class="whitespace-nowrap cursor-pointer py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {{ itm.name || 'N/A' }}
                                        </td>
                                        <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{
                    itm.workflow.description ||
                    'N/A'
                    ||
                    'N/A' }}</td>
                                        <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">
                                            <span v-if="itm.workflow.steps.length"> {{ itm.workflow.steps.length ||
                    'N/A' }}</span>
                                            <span v-else class="text-sm text-gray-500 font-semibold">No step has been
                                                added to this
                                                workflow </span>
                                        </td>
                                        <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{
                    itm.workflow.status
                    ||
                    'N/A' }}
                                        </td>
                                        <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{
                    itm.workflow.createdAt ||
                                            'N/A' }}
                                        </td>
                                        <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">
                                            <button @click="viewDocument(itm)"
                                                class="bg-black text-white px-3 py-2 rounded-md text-sm">View
                                                details</button>
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
    </main>
</template>

<script setup lang="ts">
import { useGetDocumentByWorkflowId } from '@/composables/document/getDocumentByWorkflow';
const { getDocumentByWWorkflowId, documentList, loading } = useGetDocumentByWorkflowId()

definePageMeta({
    layout: 'dashboard'
})

const viewDocument = (data: any) => {
    useRouter().push(`/dashboard/document/workflow/${data.id}`)
}

getDocumentByWWorkflowId()

</script>