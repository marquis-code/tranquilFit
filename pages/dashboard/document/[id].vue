<template>
    <main>
        <button @click="$router.back()" class="text-white bg-black rounded-full text-sm mb-4 px-4 py-2">Go Back</button>
        <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Document Details</h1>
                <p class="mt-2 text-sm text-gray-700">A brief information lto show document details</p>
            </div>
        </div>
        <div v-if="!loading && Object.keys(documentObject).length"
            class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl class="-my-3 divide-y divide-gray-100 text-sm">
                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Name</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ documentObject.workflow.name || 'N/A' }}</dd>
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
    </main>
</template>

<script setup lang="ts">
import { useGetDocumentById } from '@/composables/document/getDocumentById'
const { getDocumentById, documentObject, loading } = useGetDocumentById()
definePageMeta({
    layout: 'dashboard'
})
getDocumentById()
</script>@/composables/document/getDocumentById