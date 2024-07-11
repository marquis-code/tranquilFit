<template>
  <main>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md space-y-2">
        <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{{
          computedAuthHeader.title
        }}
        </h2>
        <p class="text-center text-gray-500">{{ computedAuthHeader.sub }}</p>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] p-3">
        <div class="bg-white pl-10 pt-6">
          <button class="border rounded-full font-bold text-sm px-6 py-1.5" @click="router.back()">Back</button>
        </div>
        <div class="bg-white px-6 py-12 shadow-lg sm:rounded-lg sm:px-12 page-transition">
          <AuthSignupForm class="page-transition" v-if="route.query.type === 'signup'" />
          <AuthLoginForm class="page-transition" v-if="route.query.type === 'login'" />
          <AuthForgotPasswordForm class="page-transition" v-if="route.query.type === 'forgot-password'" />
          <ResetPasswordForm class="page-transition" v-if="route.query.type === 'reset-password'" />
        </div>

        <p v-if="route.query.type === 'login'" class="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <a href="#" @click.prevent="router.push({ to: '/auth', query: { type: 'signup' } })"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Signup</a>
        </p>
        <p v-if="route.query.type === 'signup'" class="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <a href="#" @click.prevent="router.push({ to: '/auth', query: { type: 'login' } })"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
        </p>
      </div>
    </div>
    <!-- <div>
      <h1>Calculate Your BMI</h1>
      <BMIForm />
    </div> -->
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
definePageMeta({
  layout: 'authentication'
})
const router = useRouter()

const computedAuthHeader = computed(() => {
  const routeLookup = {
    'login': { title: 'Login', sub: 'Welcome back! Log in to continue.' },
    'signup': { title: 'Sign up', sub: 'Create an account to get started.' },
    'forgot-password': { title: 'Forgot password', sub: 'Enter your email address, we will send you an email with password reset instructions.' },
    'reset-password': { title: 'Reset password', sub: 'Enter your new passwords' }
  } as any
  const pageHeaderObj = routeLookup[route.query.type]
  if (!pageHeaderObj) {
    router.push({ to: 'auth', query: { type: 'login' } })
  }
  return pageHeaderObj
})
</script>

<style>
.page-transition>* {
  animation: slideTransition ease-in-out 0.5s;
}

@keyframes slideTransition {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
}

/* You can add more specific animation styles for leave transition if needed */
.page-transition--leave>* {
  animation: slideOutTransition ease-in-out 0.5s;
}

@keyframes slideOutTransition {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>
