<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <button @click="$router.back()" class="text-white bg-black rounded-full text-sm mb-4 px-4 py-2">Go Back</button>
    <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Organizations</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all organizations</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <NuxtLink to="/dashboard/organization/create" type="button" @click="openDeleteConfirmation"
          class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add
          Organization</NuxtLink>
      </div>
    </div>
    <div class="flow-root">
      <div v-if="organizationList.length" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">CreatedAt</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Website</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Logo</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(itm, idx) in organizationList" :key="idx">
                  <td class="whitespace-nowrap cursor-pointer py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {{ itm.name }}
                  </td>
                  <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.description ||
      'N/A' }}</td>
                  <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.createdAt || 'N/A'
                    }}</td>
                  <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">{{ itm.website || 'N/A'
                    }}</td>
                  <td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-gray-500">
                    <svg v-if="!itm.logo?.length" xmlns="http://www.w3.org/2000/svg" width="37" height="37"
                      viewBox="0 0 24 24" fill="#000">
                      <path
                        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1.227 9.537c1.75 0 3.31.401 4.653 1.206.2.117.317.236.317.532 0 .288-.234.5-.498.5-.129 0-.217-.045-.338-.119-1.16-.7-2.605-1.07-4.14-1.07-.856 0-1.717.11-2.523.278-.13.028-.296.079-.394.079a.5.5 0 0 1-.507-.503c0-.336.194-.503.436-.55a13.357 13.357 0 0 1 2.994-.353zm-.11-2.613c2.094 0 4.12.522 5.712 1.475.267.153.366.347.366.632a.622.622 0 0 1-.624.627c-.173 0-.283-.07-.4-.14-1.302-.771-3.106-1.285-5.08-1.285-1.014 0-1.888.142-2.612.335-.156.043-.243.09-.389.09a.626.626 0 0 1-.625-.628c0-.34.165-.574.498-.668.9-.247 1.817-.438 3.154-.438zm.163-2.749c2.35 0 4.82.484 6.626 1.544.243.138.412.346.412.726 0 .437-.35.75-.754.75-.163 0-.26-.04-.413-.123-1.448-.868-3.695-1.347-5.868-1.347-1.085 0-2.186.11-3.196.385-.116.029-.263.087-.41.087a.75.75 0 0 1-.754-.764c0-.435.27-.68.56-.765 1.14-.336 2.413-.493 3.797-.493z" />
                    </svg>
                    <img v-else :src="itm.logo" alt="Organization Logo" class="h-10 w-10 rounded-full">
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <div class="flex gap-x-3">
                      <a href="" @click.prevent="handleDeleteOrganization(itm.id)"
                        class="text-white px-6 py-2 rounded-md bg-red-500 text-sm">Delete<span class="sr-only">
                        </span></a>
                      <nuxt-link :to="`/dashboard/organization/${itm.id}/members`"
                        class="text-white px-6 py-2 rounded-md bg-red-500 text-sm">View members<span class="sr-only">
                        </span></nuxt-link>
                      <nuxt-link :to="`/dashboard/organization/${itm.id}/workflow`"
                        class="text-white px-6 py-2 rounded-md bg-red-500 text-sm">workflow<span class="sr-only">
                        </span></nuxt-link>
                    </div>
                  </td>
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
import { useFetchOrganization } from '@/composables/organization/fetch'
import { useDeleteOrganization } from '@/composables/organization/delete'
import { useConfirmationModal } from '@/composables/core/useConfirmationModal'
const { openModal } = useConfirmationModal()
const { handleDeleteOrganization, loading } = useDeleteOrganization()
const { fetchOrganizations, organizationList, loading: fetching } = useFetchOrganization()
const router = useRouter()
definePageMeta({
  layout: 'dashboard'
})
fetchOrganizations()

const viewOrganization = (itm: any) => {
  router.push(`/dashboard/organization/${itm.id}`)
}

function openDeleteConfirmation() {
  openModal('Are you sure you want to delete this user?', () => {
    console.log('User deletion confirmed.')
    // Add logic to delete the user here.
  })
}
</script>