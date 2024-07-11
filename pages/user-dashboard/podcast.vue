<template>
    <div class="container mx-auto divide divide-y">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-medium">Latest Podcast Episodes</h1>
        <div class="border bg-gray-600 w-6/12 mx-auto"></div>
        <div>
          <button class="border rounded-md px-3 py-1.5 text-sm bg-black text-white">View All</button>
        </div>
      </div>
      <div class="overflow-y-auto h-[650px] hide-scrollbar">
        <PodcastEpisode
        v-for="episode in episodes"
        :key="episode.id"
        :image="episode.image"
        :podcastMaster="episode.podcastMaster"
        :duration="episode.duration"
        :episodeNumber="episode.episodeNumber"
        :title="episode.title"
        :description="episode.description"
        :listens="episode.listens"
        :likes="episode.likes"
        :comments="episode.comments"
        :audioUrl="episode.audioUrl"
        :downloads="episode.downloads"
      />
      </div>
    </div>
  </template>
  
  <script setup>
  import podcast1 from '@/assets/img/podcast1.jpg'
  import podcast2 from '@/assets/img/podcast2.jpg'
  import podcast3 from '@/assets/img/podcast3.jpg'
  import podcast4 from '@/assets/img/podcast4.jpg'
  definePageMeta({
    layout: 'user-dashboard'
  })
  
  import PodcastEpisode from '~/components/PodcastEpisode.vue'
  
  // Sample weight loss podcast URLs (replace with actual URLs if available)
  const audioUrls = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  ]
  
  const getRandomAudioUrl = () => {
    return audioUrls[Math.floor(Math.random() * audioUrls.length)]
  }
  
  const episodes = [
    {
      id: 1,
      image: podcast1,
      podcastMaster: 'PODCASMASTER',
      duration: '46 min',
      episodeNumber: 'EPISODE 10',
      title: 'How to build your personal resilience',
      description: 'Lorem ipsum dolor sit amet...',
      listens: '8.9K',
      likes: '2.1K',
      comments: '982K',
      downloads: '982K',
      audioUrl: getRandomAudioUrl()
    },
    {
      id: 2,
      image: podcast2,
      podcastMaster: 'PODCASMASTER',
      duration: '34 min',
      episodeNumber: 'EPISODE 9',
      title: 'Imperfect hands don\'t reduce creativity',
      description: 'Quisque sit amet lacus luctus...',
      listens: '3.2K',
      likes: '5.6K',
      comments: '1.9K',
      downloads: '982K',
      audioUrl: getRandomAudioUrl()
    },
    {
      id: 3,
      image: podcast3,
      podcastMaster: 'PODCASMASTER',
      duration: '46 min',
      episodeNumber: 'EPISODE 8',
      title: 'How to build your personal resilience',
      description: 'Cras facilisis orci in arcu ullamcorper...',
      listens: '42K',
      likes: '10K',
      comments: '16K',
      downloads: '982K',
      audioUrl: getRandomAudioUrl()
    },
    {
      id: 4,
      image: podcast4,
      podcastMaster: 'PODCASMASTER',
      duration: '46 min',
      episodeNumber: 'EPISODE 8',
      title: 'How to build your personal resilience',
      description: 'Cras facilisis orci in arcu ullamcorper...',
      listens: '42K',
      likes: '10K',
      comments: '16K',
      downloads: '982K',
      audioUrl: getRandomAudioUrl()
    }
  ]
  </script>
  
  <style scoped>
  .container {
    padding: 2rem;
  }
  </style>
  