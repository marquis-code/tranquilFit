<template>
    <div class="flex flex-col md:flex-row items-center my-16">
        <div class="text-blue-600 text-6xl font-bold md:w-1/4 md:text-right">
            <span>{{ stepNumber }}</span>
            <div class="text-sm font-semibold mt-2 uppercase hidden md:block">{{ category }}</div>
        </div>
        <div class="md:w-1/2 text-center md:text-left mt-4 md:mt-0 md:px-8">
            <h2 class="text-xl font-bold">{{ title }}</h2>
            <p class="mt-4 text-gray-600">{{ description }}</p>
        </div>
        <div class="md:w-1/4 mt-8 md:mt-0">
            <div class="rounded-lg overflow-hidden shadow-lg bg-gray-200">
                <img :src="image" alt="Step image" class="w-full h-auto object-cover">
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    stepNumber: String,
    category: String,
    title: String,
    description: String,
    image: String,
});
</script>

<style scoped>
.text-blue-600 {
    color: #1e3a8a;
    /* Customize as per your design */
}
</style>