
   <template>
    <div class="max-w-7xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <div class="flex">
        <img :src="image" alt="Episode image" class="w-32 h-32 rounded-lg object-cover mr-6">
        <div class="flex-1">
          <div class="flex items-center mb-2">
            <span class="text-gray-600 text-sm font-semibold">{{ podcastMaster }}</span>
            <span class="text-gray-600 mx-2">•</span>
            <span class="text-gray-600 text-sm">{{ duration }}</span>
            <span class="text-gray-600 mx-2">•</span>
            <span class="text-gray-600 text-sm">{{ episodeNumber }}</span>
          </div>
          <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
          <p class="text-gray-600 mt-2">{{ description }}</p>
          <div class="flex items-center mt-4 text-gray-600">
            <span class="flex items-center mr-6 text-xs">
              <img class="h-4 w-4 mr-1" src="@/assets/icons/listen.svg" />{{ listens }}
            </span>
            <span class="flex items-center mr-6 text-xs">
              <img class="h-4 w-4 mr-1" src="@/assets/icons/like.svg" />{{ likes }}
            </span>
            <span class="flex items-center mr-6 text-xs">
              <img class="h-4 w-4 mr-1" src="@/assets/icons/comment.svg" />{{ comments }}
            </span>
            <span class="flex items-center mr-6 text-xs">
                <img class="h-4 w-4 mr-1" src="@/assets/icons/download.svg" />{{ downloads }}
              </span>
          </div>
        </div>
        <div class="flex items-center">
          <button @click="togglePlayPause" class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <img v-if="!isPlaying" src="@/assets/icons/play-button.svg" alt="play button" />
            <img v-if="isPlaying" src="@/assets/icons/pause-button.svg" alt="play button" />
          </button>
          <audio ref="audio" :src="audioUrl" @error="handleAudioError" class="hidden"></audio>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    image: String,
    podcastMaster: String,
    duration: String,
    episodeNumber: String,
    title: String,
    description: String,
    listens: String,
    likes: String,
    comments: String,
    audioUrl: String,
    downloads: String
  })
  
  const audio = ref(null)
  const isPlaying = ref(false)
  
  const togglePlayPause = () => {
    if (audio.value) {
      if (isPlaying.value) {
        audio.value.pause()
      } else {
        audio.value.play().catch(error => {
          console.error('Audio play error:', error)
          alert('Audio cannot be played.')
        })
      }
      isPlaying.value = !isPlaying.value
    }
  }
  
  const handleAudioError = () => {
    alert('Audio source not supported or not found.')
    isPlaying.value = false
  }
  </script>
  
  <style scoped>
  .fas {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
  }
  </style>
  