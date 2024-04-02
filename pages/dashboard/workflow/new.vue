<template>
  <main>
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold mb-4 text-ellipsis font-mono">Workflows</h1>
        <button @click="openSlideOver = true" type="button"
          class="text-sm rounded-full bg-black text-white px-3 py-2.5">Create
          Fields</button>
      </div>
      <!-- <div class="lg:flex justify-between flex-col">
        <div class="w-full lg:w-6/12">
          <workflow-creator></workflow-creator>
        </div>
        <div class="w-full lg:w-6/12 shadow-md border-[0.4px] rounded-md">
          <workflow-timeline></workflow-timeline>
        </div>
      </div> -->
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="">
          <workflow-creator></workflow-creator>
        </div>
        <div class="shadow-md border-[0.4px] border-gray-400 rounded-md">
          <workflow-timeline></workflow-timeline>
        </div>
      </div>
    </div>
    <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true" v-if="openSlideOver">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0"></div>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div class="pointer-events-auto w-screen max-w-md">
              <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <!-- <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2 class="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Panel title</h2>
                    <div class="ml-3 flex h-7 items-center">
                      <button @click="openSlideOver = false" type="button"
                        class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute -inset-2.5"></span>
                        <span class="sr-only">Close panel</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                          aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div> -->
                <div class="relative mt-12 flex-1 px-4 sm:px-6">
                  <form @submit.prevent="createField" class="flex h-full flex-col divide-y divide-gray-200 ">
                    <div class="h-0 flex-1 overflow-y-auto">
                      <div class="bg-indigo-700 px-4 py-6 sm:px-6">
                        <div class="flex items-center justify-between">
                          <h2 class="text-base font-semibold leading-6 text-white" id="slide-over-title">Create Workflow
                            Fields For Your Organization</h2>
                          <div class="ml-3 flex h-7 items-center">
                            <button @click="openSlideOver = false" type="button"
                              class="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                              <span class="absolute -inset-2.5"></span>
                              <span class="sr-only">Close panel</span>
                              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="mt-1">
                          <p class="text-sm text-indigo-300">Get started by filling in the information below to create a
                            new workflow field.</p>
                        </div>
                      </div>
                      <div class="flex flex-1 flex-col justify-between">
                        <div class="divide-y divide-gray-200 px-4 sm:px-6">
                          <div class="space-y-6 pb-5 pt-6">
                            <div>
                              <label for="project-name"
                                class="block text-sm font-semibold leading-6 text-gray-900">Field
                                name</label>
                              <div class="mt-2">
                                <input type="text" name="project-name" id="project-name" v-model="form.name"
                                  class="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                              </div>
                            </div>
                            <div>
                              <label for="description" class="block text-sm font-semibold leading-6 text-gray-900">Field
                                Description</label>
                              <div class="mt-2">
                                <textarea id="description" name="description" rows="4" v-model="form.desc"
                                  class="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                              </div>
                            </div>
                            <fieldset>
                              <legend class="text-sm font-semibold leading-6 text-gray-900">Field type
                                <div class="mt-4 flex text-sm">
                                  <a href="#" class="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                    <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20"
                                      fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd" />
                                    </svg>
                                    <span class="ml-2">Learn more about sharing</span>
                                  </a>
                                </div>
                              </legend>
                              <div class="mt-2 space-y-4">
                                <div class="relative flex items-start">
                                  <div class="absolute flex h-6 items-center">
                                    <input id="type-none" name="field-type" value="TYPE_NONE" v-model="form.fieldType"
                                      aria-describedby="privacy-public-description" type="radio"
                                      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" checked>
                                  </div>
                                  <div class="pl-7 text-sm leading-6">
                                    <label for="type-none" class="font-medium text-gray-900">Blank / None</label>
                                    <p id="privacy-public-description" class="text-gray-500">This field enable users to
                                      select no option. </p>
                                  </div>
                                </div>
                                <div>
                                  <div class="relative flex items-start">
                                    <div class="absolute flex h-6 items-center">
                                      <input id="type-short-text" name="field-type" value="TYPE_SHORT_TEXT"
                                        v-model="form.fieldType"
                                        aria-describedby="privacy-private-to-project-description" type="radio"
                                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    </div>
                                    <div class="pl-7 text-sm leading-6">
                                      <label for="type-short-text" class="font-medium text-gray-900">Short Text</label>
                                      <p id="privacy-private-to-project-description" class="text-gray-500">This field
                                        enable users to enter a short text</p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div class="relative flex items-start">
                                    <div class="absolute flex h-6 items-center">
                                      <input id="type-long-text" name="field-type" value="TYPE_LONG_TEXT"
                                        v-model="form.fieldType"
                                        aria-describedby="privacy-private-to-project-description" type="radio"
                                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    </div>
                                    <div class="pl-7 text-sm leading-6">
                                      <label for="type-long-text" class="font-medium text-gray-900">Long Text</label>
                                      <p id="privacy-private-description" class="text-gray-500">This field enable users
                                        to enter a long text</p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div class="relative flex items-start">
                                    <div class="absolute flex h-6 items-center">
                                      <input id="type-number" name="field-type" value="TYPE_NUMBER"
                                        v-model="form.fieldType"
                                        aria-describedby="privacy-private-to-project-description" type="radio"
                                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    </div>
                                    <div class="pl-7 text-sm leading-6">
                                      <label for="type-number" class="font-medium text-gray-900">Number</label>
                                      <p id="privacy-private-description" class="text-gray-500">This field enable users
                                        to enter a number</p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div class="relative flex items-start">
                                    <div class="absolute flex h-6 items-center">
                                      <input id="type-time" name="field-type" value="TYPE_TIME" v-model="form.fieldType"
                                        aria-describedby="privacy-private-to-project-description" type="radio"
                                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    </div>
                                    <div class="pl-7 text-sm leading-6">
                                      <label for="type-time" class="font-medium text-gray-900">Time</label>
                                      <p id="privacy-private-description" class="text-gray-500">This field enable users
                                        to select a time</p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div class="relative flex items-start">
                                    <div class="absolute flex h-6 items-center">
                                      <input id="type-boolean" name="field-type" value="TYPE_BOOL"
                                        v-model="form.fieldType"
                                        aria-describedby="privacy-private-to-project-description" type="radio"
                                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    </div>
                                    <div class="pl-7 text-sm leading-6">
                                      <label for="type-boolean" class="font-medium text-gray-900">True / False</label>
                                      <p id="privacy-private-description" class="text-gray-500">This field enable users
                                        to select true or false</p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div class="relative flex items-start">
                                    <div class="absolute flex h-6 items-center">
                                      <input id="type-file" name="field-type" value="TYPE_FILE" v-model="form.fieldType"
                                        aria-describedby="privacy-private-to-project-description" type="radio"
                                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    </div>
                                    <div class="pl-7 text-sm leading-6">
                                      <label for="type-file" class="font-medium text-gray-900">File Upload</label>
                                      <p id="privacy-private-description" class="text-gray-500">This field enable users
                                        to upload a file</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-shrink-0 justify-end px-4 py-4">
                      <button @click="openSlideOver = false" type="button"
                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                      <button :disabled="processing || !isFormEmpty" type="submit"
                        class="ml-4 inline-flex justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>


<style>
.container {
  max-width: 1200px;
}
</style>

<script setup lang="ts">
import { useCreateField } from '@/composables/workflow/createField'
const { createField, form, processing, isFormEmpty } = useCreateField()
definePageMeta({
  layout: 'dashboard'
})

const openSlideOver = ref(false)
</script>
<!-- TYPE_NONE, TYPE_SHORT_TEXT, TYPE_LONG_TEXT, TYPE_NUMBER, TYPE_TIME, TYPE_BOOL, TYPE_FILE -->