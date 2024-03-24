<template>
  <main>
    <h1 class="text-center text-xl font-medium pb-[62px] pt-[127px]">Add Team Members</h1>
    <form class="space-y-6 max-w-md mx-auto" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm sr-only font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input placeholder="E-mail" id="email" name="email" type="email" autocomplete="email" required
            class="block w-full rounded-md border border-gray-200 py-3 px-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm sr-only font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input placeholder="E-mail" id="email" name="email" type="email" autocomplete="email" required
            class="block w-full rounded-md border border-gray-200 py-3 px-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm sr-only font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input placeholder="E-mail" id="email" name="email" type="email" autocomplete="email" required
            class="block w-full rounded-md border border-gray-200 py-3 px-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div class="pt-6">
        <button type="submit"
          class="flex w-full justify-center rounded-full bg-[#1F9D00] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1F9D00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F9D00]">Invite</button>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
     layout: 'dashboard'
 })
</script>
