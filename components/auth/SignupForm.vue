<template>
    <form class="space-y-6" @submit.prevent="handleRegister">
        <div>
            <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div class="mt-2">
                <input id="fullName" name="fullName" type="text" placeholder="Enter full name"
                    v-model="registerPayload.fullName"
                    class="block w-full rounded-md border px-3 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
            </div>
        </div>
        <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
                <input id="email" name="email" type="email" placeholder="Enter your email address"
                    v-model="registerPayload.email"
                    class="block w-full rounded-md border px-3 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
            </div>
        </div>

        <div>
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
            <div class="mt-2">
                <input id="phone" name="phone" type="tel" placeholder="Enter your phone number"
                    v-model="registerPayload.phone"
                    class="block w-full rounded-md border px-3 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
            </div>
        </div>

        <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-2 relative">
                <input id="password" name="password" :type="showPassword ? 'text' : 'password'"
                    placeholder="Enter your password" v-model="registerPayload.password"
                    class="block w-full rounded-md border px-3 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
                <img @click="showPassword = !showPassword" :src="eye" alt=""
                    class="absolute cursor-pointer top-2.5 right-4 h-6 w-6">
            </div>
        </div>

        <div class="pt-8">
            <button type="submit" :disabled="loading || !isFormEmpty"
                class="flex w-full justify-center rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {{ loading ? 'processing..' : 'Sign up' }}</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useRegister } from '@/composables/auth/register'
const { registerPayload, handleRegister, loading, isFormEmpty } = useRegister()
import eyeOpen from '@/assets/icons/eye-open.svg'
import eyeClose from '@/assets/icons/eye-close.svg'
const showPassword = ref(false)
const router = useRouter()
const eye = computed(() => {
    return !showPassword.value ? eyeClose : eyeOpen
})
</script>