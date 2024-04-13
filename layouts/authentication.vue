<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-6 w-auto" src="@/assets/img/logo.png" alt="Your Company">
      <h2 class="mt-[84px] text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{{ route.name ===
        'login'
        ? 'Sign in to portal' : 'Create Account' }}</h2>
    </div>

    <div class="mt-[60px] sm:mx-auto sm:w-full sm:max-w-sm">
      <slot />
    </div>
    <p class="mt-10 text-center text-sm text-gray-500">
       {{ route.name ===
        'login'
        ? 'Don\'t have an account?' : 'Already have an account' }}
      <nuxt-link :to="route.name === 'login' ? '/signup' : '/login'" class="font-semibold leading-6 text-[#1F9D00] hover:text-[#1F9D00]">{{ route.name === 'login' ? 'Sign up' : 'Login' }}</nuxt-link>
    </p>
  </div>
</template>

<script setup lang="ts">
 const route = useRoute()
</script>
