<template>
    <form class="space-y-6" @submit.prevent="login">
        <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
                <input id="email" name="email" type="email"
                    class="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>

        <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-2 relative">
                <input id="password" name="password" :type="showPassword ? 'text' : 'password'"
                    class="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <img @click="showPassword = !showPassword" :src="eye" alt=""
                    class="absolute cursor-pointer top-2.5 right-4 h-6 w-6">
            </div>
        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900">Remember me</label>
            </div>

            <div class="text-sm leading-6">
                <a href="#" @click.prevent="router.push({ to: '/auth', query: { type: 'forgot-password'} })" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
        </div>

        <div>
            <button type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                in</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import eyeOpen from '@/assets/icons/eye-open.svg'
import eyeClose from '@/assets/icons/eye-close.svg'
const showPassword = ref(false)
const router = useRouter()
const eye = computed(() => {
    return !showPassword.value ? eyeClose : eyeOpen
})

const login = () => {
    router.push('/user-dashboard')
}
</script>