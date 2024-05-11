<template>
  <main>
    <div class="rounded-lg rounded-b-xl shadow-lg bg-white border-[0.2px]">
      <div class="p-6 space-y-3">
        <h1 class="font-semibold text-gray-500 text-sm">MEMBERSHIP</h1>
      </div>
      <div class="px-10 pb-10">
        <div class="relative max-w-md">
          <label for="name"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Code</label>
          <input type="text" name="name" id="name"
            class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-4">
        </div>
        <div class="pt-10">
          <button class="text-white bg-gray-300 px-10 py-2.5 rounded-lg">APPLY</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'user-dashboard'
})
</script>