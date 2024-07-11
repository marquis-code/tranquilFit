<template>
    <main>
        <div class="flex min-h-screen">
            <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Stress-Free Weight
                            Loss
                            (SWL) Assessment
                        </h2>
                        <p class="mt-2 text-sm leading-6 text-gray-500">
                            This form will help us determine if you are eligible for our program
                        </p>
                    </div>

                    <div class="mt-10">
                        <div>
                            <form @submit.prevent="handleAssessment">
                                <section v-if="route.query.step === 'step1'" class="space-y-6">
                                    <div>
                                        <label for="full_name"
                                            class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                                        <div class="mt-2">
                                            <input v-model="credentials.fullName" id="full_name" name="full_name"
                                                type="text" autocomplete="current-password" required
                                                class="block w-full rounded-md border-[0.6px] border-gay-500 outline-none py-3 px-3 shadow-sm ">
                                        </div>
                                    </div>

                                    <div>
                                        <label for="phone_number"
                                            class="block text-sm font-medium leading-6 text-gray-900">Phone
                                            Number</label>
                                        <div class="mt-2">
                                            <input v-model="credentials.phone" id="phone_number" name="phone_number"
                                                type="password" autocomplete="current-password" required
                                                class="block w-full rounded-md border-[0.6px] border-gay-500 outline-none py-3 px-3 shadow-sm ">
                                        </div>
                                    </div>

                                    <div>
                                        <label for="gender"
                                            class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                                        <div class="mt-2">
                                            <select v-model="credentials.gender"
                                                class="block w-full rounded-md border-[0.6px] border-gay-500 outline-none py-3 px-3 shadow-sm ">
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label for="age"
                                            class="block text-sm font-medium leading-6 text-gray-900">Age</label>
                                        <div class="mt-2">
                                            <input id="age" name="age" type="tel" v-model="credentials.age"
                                                class="block w-full rounded-md border-[0.6px] border-gay-500 outline-none py-3 px-3 shadow-sm ">
                                        </div>
                                    </div>

                                    <div>
                                        <label for="email"
                                            class="block text-sm font-medium leading-6 text-gray-900">Email
                                            address</label>
                                        <div class="mt-2">
                                            <input id="email" name="email" type="email" v-model="credentials.email"
                                                class="block w-full rounded-md border-[0.6px] border-gay-500 outline-none py-3 px-3 shadow-sm ">
                                        </div>
                                    </div>

                                    <div>
                                        <button @click="router.push({ path: route.path, query: { step: 'step2' } })"
                                            type="button" :disabled="!isFirstFormEmpty"
                                            class="flex w-full justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save
                                            and Continue</button>
                                    </div>
                                </section>
                                <section v-if="route.query.step === 'step2'" class="space-y-6">
                                    <div>
                                        <label for="current_weight"
                                            class="block text-sm font-medium leading-6 text-gray-900">Current
                                            Weight</label>
                                        <div class="mt-2">
                                            <input id="current_weight" name="current_weight" type="tel"
                                                v-model="credentials.currentWeight"
                                                class="block w-full rounded-md border-[0.6px] border-gay-500 outline-none py-3 px-3 shadow-sm ">
                                        </div>
                                    </div>

                                    <div>
                                        <label for="target_weight"
                                            class="block text-sm font-medium leading-6 text-gray-900">Target
                                            weight</label>
                                        <div class="mt-2">
                                            <input id="target_weight" name="target_weight" type="tel"
                                                v-model="credentials.targetWeight"
                                                class="block w-full rounded-md border-[0.6px] border-gay-500 outline-none py-3 px-3 shadow-sm ">
                                        </div>
                                    </div>

                                    <div>
                                        <label for="target_height"
                                            class="block text-sm font-medium leading-6 text-gray-900">Current
                                            Height</label>
                                        <div class="mt-2">
                                            <input id="target_height" name="target_height" type="tel"
                                                v-model="credentials.currentHeight"
                                                class="block w-full rounded-md border-[0.6px] border-gay-500 outline-none py-3 px-3 shadow-sm ">
                                        </div>
                                    </div>

                                    <div>
                                        <label for="waist_circumference"
                                            class="block text-sm font-medium leading-6 text-gray-900"> Waist
                                            circumference</label>
                                        <div class="mt-2">
                                            <input id="waist_circumference" name="waist_circumference" type="tel"
                                                v-model="credentials.waistCircumference"
                                                class="block w-full rounded-md border-[0.6px] border-gay-500 outline-none py-3 px-3 shadow-sm ">
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" :disabled="!isSecondFormEmpty || processing"
                                            class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-indigo-600 px-3 py-3  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            {{ processing ? 'processing...' : 'Submit' }}
                                        </button>
                                    </div>
                                </section>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative hidden w-0 flex-1 lg:block">
                <img class="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt="">
            </div>
        </div>
        <CoreBaseModal @update:show="openSuccessModal = false" :show="openSuccessModal">
            <section class="flex justify-center items-center flex-col gap-y-4">
                <img src="@/assets/icons/celebration.svg" alt="" class="h-44 w-44" />
                <div class="flex justify-center items-center flex-col space-y-2">
                    <h1 class="py-0 my-0">Congratulation {{ credentials.fullName }}</h1>
                    <p class="py-0 my-0">You are qualified for Stress Free Weight Loss Coaching.</p>
                </div>
                <div class="mt-4">
                    <button @click="handleNavigation"
                        class="bg-green-600 text-white px-6 py-2.5 rounded-lg text-sm">Proceed to select
                        plans</button>
                </div>
            </section>
        </CoreBaseModal>
    </main>
</template>

<script setup lang="ts">
import { useAssessment } from '@/composables/auth/assessment'
const { credentials, handleAssessment, processing, isFirstFormEmpty, isSecondFormEmpty, openSuccessModal } = useAssessment()
const router = useRouter()
const route = useRoute()
const handleNavigation = () => {
    openSuccessModal.value = false
    router.push('/subscription')
}
const defaultStep = ref('step1')
onMounted(() => {
    console.log(!!!Object.keys(route.query).length, 'here')
    if (!!!Object.keys(route.query).length) {
        router.push({ path: route.path, query: { step: defaultStep.value } })
    }
})
</script>