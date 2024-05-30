<template>
    <div class="relative w-full h-96 bg-gray-800" @mouseover="showPlayIcon = false; playVideo()"
        @mouseleave="showPlayIcon = true; pauseVideo()">
        <video ref="video" class="w-full h-full object-cover" :src="videoSrc" loop playsinline></video>
        <div v-if="showPlayIcon"
            class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-transform duration-300 ease-in-out transform"
            :class="{ 'translate-y-full': !showPlayIcon, 'translate-y-0': showPlayIcon }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.5a1 1 0 011.707-.707l4.5 4.5a1 1 0 010 1.414l-4.5 4.5A1 1 0 019 15.5V9z"
                    clip-rule="evenodd" />
            </svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
const video = ref<HTMLVideoElement | null>(null)
const videoSrc = '/intro.mp4'
const showPlayIcon = ref(true)

const playVideo = () => {
    if (video.value) {
        video.value.play()
    }
}

const pauseVideo = () => {
    if (video.value) {
        video.value.pause()
    }
}
</script>

<style scoped>
.h-64 {
    height: 16rem;
}
</style>