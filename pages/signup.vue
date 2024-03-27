<template>
  <form class="space-y-6" @submit.prevent="handleRegister">
    <div>
      <label for="firstName" class="block sr-only text-sm font-medium leading-6 text-gray-900">First Name</label>
      <div class="mt-2">
        <input v-model="registerPayload.firstName" placeholder="Enter First Name" id="firstName" name="firstName" type="text" required
          class="block w-full rounded-md outline-none py-3 px-3 text-gray-900 shadow-sm border placeholder:text-gray-400 focus:ring-[0.4px] focus:ring-inset focus:ring-[#1F9D00] sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <label for="lastName" class="block sr-only text-sm font-medium leading-6 text-gray-900">Last Name</label>
      <div class="mt-2">
        <input v-model="registerPayload.lastName" placeholder="Enter Last Name" id="lastName" name="lastName" type="text" required
          class="block w-full rounded-md outline-none py-3 px-3 text-gray-900 shadow-sm border placeholder:text-gray-400 focus:ring-[0.4px] focus:ring-inset focus:ring-[#1F9D00] sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label for="email" class="block text-sm sr-only font-medium leading-6 text-gray-900">Email</label>
        <input v-model="registerPayload.email" placeholder="Enter Email" id="email" name="email" type="email"
          required
          class="block w-full rounded-md outline-none py-3 px-3 text-gray-900 shadow-sm border placeholder:text-gray-400 focus:ring-[0.4px] focus:ring-inset focus:ring-[#1F9D00] sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label for="password" class="block text-sm sr-only font-medium leading-6 text-gray-900">Password</label>
        <input v-model="registerPayload.password" placeholder="Enter Password" id="password" name="password" type="password"
          autocomplete="current-password" required
          class="block w-full rounded-md outline-none py-3 px-3 text-gray-900 shadow-sm border placeholder:text-gray-400 focus:ring-[0.4px] focus:ring-inset focus:ring-[#1F9D00] sm:text-sm sm:leading-6">
      </div>
    </div>


    <div class="pt-6">
      <button type="submit" :disabled="!isFormEmpty || loading"
      class="flex w-full justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-full bg-[#1F9D00] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1F9D00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F9D00]">
      {{ loading ? 'processing...' : 'Sign up' }}    
    </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRegister } from '@/composables/auth/register'
const { registerPayload, handleRegister, loading, isFormEmpty  } = useRegister()
 definePageMeta({
     layout: 'authentication'
 })

</script>

<style></style>
