<template>
<main>
  <button @click="$router.back()" class="text-white bg-black rounded-full text-sm mb-4 px-4 py-2">Go Back</button>
  <section class="grid place-items-center h-screen">
    <div class="flex items-center gap-x-4 w-full max-w-md mx-auto">
      <div class="h-36 w-6/12 bg-[#F7F8FA] cursor-pointer text-center text-sm flex  justify-center items-center font-medium rounded-md">
        Manage <br /> Documents
      </div>
      <div class="h-36 w-6/12 bg-[#F7F8FA] cursor-pointer text-sm flex text-center justify-center items-center font-medium rounded-md">
        User <br /> Management
      </div>
    </div>
  </section>
</main>
</template>

<script setup lang="ts">
definePageMeta({
     layout: 'dashboard'
 })
</script>
