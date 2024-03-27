<template>
  <main>
    <button @click="$router.back()" class="text-white bg-black rounded-full text-sm mb-4 px-4 py-2">Go Back</button>
    <section class="max-w-md mx-auto">
      <h1 class="text-center text-base lg:text-xl font-medium pb-[20px]">Create a new organization</h1>
      <form class="space-y-6" @submit.prevent="handleCreateOrganization">
        <div>
          <!-- <label for="orgName" class="block text-sm sr-only font-medium leading-6 text-gray-900">Logo</label>
        <div class="mt-2">
          <input id="orgName" name="orgName" type="file" required
            class="block w-full rounded-md outline-none py-3 px-3 text-gray-900 shadow-sm border placeholder:text-gray-400 focus:ring-[0.4px] focus:ring-inset focus:ring-[#1F9D00] sm:text-sm sm:leading-6">
        </div> -->
          <div class="flex justify-center items-center">
            <div class="p-4">
              <label for="file-upload" class="cursor-pointer">
                <div
                  class="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-gray-300 border-dashed hover:border-gray-400 transition-all duration-300 ease-in-out">
                  <img v-if="preview" :src="preview" class="w-full h-full object-cover" alt="Preview">
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-0.9 2-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
                  </svg>
                </div>
              </label>
              <input id="file-upload" type="file" class="hidden" @change="handleFileChange" accept="image/*">
            </div>
          </div>
        </div>
        <div>
          <label for="orgName" class="block text-sm sr-only font-medium leading-6 text-gray-900">Organization
            Name:</label>
          <div class="mt-2">
            <input v-model="organizationPayload.name" placeholder="Enter organization name" id="orgName" name="orgName"
              type="text" required
              class="block w-full text-sm md:text-base rounded-md outline-none py-3 px-3 text-gray-900 shadow-sm border placeholder:text-gray-400 focus:ring-[0.4px] focus:ring-inset focus:ring-[#1F9D00] sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label for="description" class="block text-sm sr-only font-medium leading-6 text-gray-900">Describe your
            organization:</label>
          <div class="mt-2">
            <textarea v-model="organizationPayload.description" placeholder="Describe your organization..." rows="4"
              cols="4" id="description" name="description" required
              class="block w-full text-sm md:text-base rounded-md outline-none resize-none py-3 px-3 text-gray-900 shadow-sm border placeholder:text-gray-400 focus:ring-[0.4px] focus:ring-inset focus:ring-[#1F9D00] sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
        <div>
          <label for="website" class="block text-sm sr-only font-medium leading-6 text-gray-900">Website Url:</label>
          <div class="mt-2">
            <input v-model="organizationPayload.website" type="url" placeholder="Enter website Url" id="websiteUrl"
              name="websiteUrl" required
              class="block w-full text-sm md:text-base rounded-md outline-none py-3 px-3 text-gray-900 shadow-sm border placeholder:text-gray-400 focus:ring-[0.4px] focus:ring-inset focus:ring-[#1F9D00] sm:text-sm sm:leading-6">
          </div>
        </div>
        <div class="pt-6">
          <button type="submit" :disabled="!isFormEmpty || loading"
            class="flex w-full justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-full bg-[#1F9D00] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1F9D00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F9D00]">
            {{ loading ? 'processing...' : 'Create' }}</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useCreateOrganization } from '@/composables/organization/create'
const { handleCreateOrganization, organizationPayload, loading, isFormEmpty } = useCreateOrganization()
definePageMeta({
  layout: 'dashboard'
})
const preview = ref(null) as any;
const handleFileChange = (event: any) => {
  const file = event.target.files[0];
  organizationPayload.value.logo = file
  if (file) {
    preview.value = URL.createObjectURL(file);
  }
};
</script>
