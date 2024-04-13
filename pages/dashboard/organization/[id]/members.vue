<template>
    <main>
        <div class="px-4 sm:px-6 lg:px-8">
            <button @click="$router.back()" class="text-white bg-black rounded-full text-sm mb-4 px-4 py-2">Go
                Back</button>
            <div class="sm:flex sm:items-center border-[0.6px] rounded-tr-md rounded-tl-md p-3">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-900">Organization Members</h1>
                    <p class="mt-2 text-sm text-gray-700">A list of all organizations members</p>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button" @click="showMemberSlideForm = true"
                        class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                        Member</button>
                </div>
            </div>
            <div class="flow-root">
                <div v-if="organizationMembersList.length" class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            First
                                            Name
                                        </th>
                                        <th scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Last Name
                                        </th>
                                        <th scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                                        <th scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Organization ID</th>
                                        <th scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr v-for="(itm, idx) in organizationMembersList" :key="idx">
                                        <td
                                            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {{
                itm.firstName }}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ itm.lastName ||
                'N/A' }}</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ itm.email ||
                'N/A' }}</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ itm.orgId ||
                'N/A' }}</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ itm.role ||
                'N/A' }}</td>
                                        <td v-if="userRole === 'ROLE_ADMIN_RO' || userRole === 'ROLE_ADMIN_RW'"
                                            class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="" @click.prevent="deleteMember(itm.id)"
                                                class="bg-red-500 text-white px-3 py-1.5 rounded-md">Delete<span
                                                    class="sr-only">
                                                </span></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <EmptyState title="No Organization Member available" desc="Please add an organization" v-else />
            </div>
        </div>

        <div v-if="showMemberSlideForm" class="relative z-50" aria-labelledby="slide-over-title" role="dialog"
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
                                                id="slide-over-title">Create New Organization Member
                                            </h2>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button @click="showMemberSlideForm = false" type="button"
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
                                                below to create your new member.</p>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col justify-between">
                                        <div class="divide-y divide-gray-200 px-4 sm:px-6">
                                            <div class="space-y-6 pb-5 pt-6">
                                                <div>
                                                    <label for="project-name"
                                                        class="block text-sm font-medium leading-6 text-gray-900">User
                                                        ID</label>
                                                    <div class="mt-2">
                                                        <input placeholder="Enter field name"
                                                            v-model="memberPayload.userId" type="text" readonly disabled
                                                            name="project-name" id="project-name"
                                                            class="block w-full text-sm rounded-md border-0 py-3 font-semibold text-gray-950 cursor-not-allowed opacity-25 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                    </div>
                                                </div>
                                                <div>
                                                    <label for="description"
                                                        class="block text-sm font-medium leading-6 text-gray-900">Field
                                                        Type</label>
                                                    <div class="mt-2">
                                                        <select v-model="memberPayload.role"
                                                            class="block w-full text-sm rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                            <option v-for="(itm, idx) in roleTypes" :key="idx"
                                                                :value="itm.value">
                                                                {{ itm.text }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-shrink-0 justify-end px-4 py-4">
                                    <button type="button" @click="showMemberSlideForm = false"
                                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                                    <button :disabled="!isFormEmpty" @click="handleAddMember" type="button"
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
    </main>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import { useLogin } from '@/composables/auth/login'
import { useAddOrganizationMember } from '@/composables/organization/addMember'
import { useFetchOrganizationMembers } from '@/composables/organization/getMembers'
import { useDeleteMember } from '@/composables/organization/ deleteMember'
const { userRole } = useLogin()
const { fetchOrganizationMembers, organizationMembersList, loading } = useFetchOrganizationMembers()
const { handleDeleteMember, loading: deleting } = useDeleteMember()
const { handleAddMember, memberPayload, loading: processing, isFormEmpty } = useAddOrganizationMember()
definePageMeta({
    layout: 'dashboard'
})

const roleTypes = ref([
    {
        text: 'User',
        value: 'ROLE_USER'
    },
    {
        text: 'Administrator RO',
        value: 'ROLE_ADMIN_RO'
    },
    {
        text: 'Administrator RW',
        value: 'ROLE_ADMIN_RW'
    },
    {
        text: 'Owner',
        value: 'ROLE_OWNER'
    }
])

fetchOrganizationMembers()

const deleteMember = (id: any) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
            await handleDeleteMember(id)
        } else {
            Swal.fire("Cancelled", "Action was cancelled", "info");
        }
    });
}

const showMemberSlideForm = ref(false)
</script>