<template>
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-semibold mb-2">Our Processes</h1>
      <div class="overflow-y-auto h-[650px] hide-scrollbar">
        <StepCard
        v-for="step in steps"
        :key="step.stepNumber"
        :stepNumber="step.stepNumber"
        :category="step.category"
        :title="step.title"
        :description="step.description"
        :image="step.image"
      />
      </div>
    </div>
  </template>
  
  <script setup>
  import step1 from '@/assets/img/podcast1.jpg'
  import step2 from '@/assets/img/podcast2.jpg'
  import step3 from '@/assets/img/podcast3.jpg'
  import StepCard from '~/components/StepCard.vue'

  definePageMeta({
    layout: 'user-dashboard'
})
  
  const steps = [
    {
      stepNumber: '01',
      category: 'INSPECTION + AUDIT',
      title: 'Create account',
      description: 'Creating an account is the first step in your coaching journey. It allows you to access all the features and benefits of our platform, including personalized coaching and resources.',
      image: step1
    },
    {
      stepNumber: '02',
      category: 'TESTING + ASSESSMENT',
      title: 'Login to your account',
      description: 'Logging in to your account gives you access to your personalized dashboard, where you can track your progress, communicate with your coach, and access resources.',
      image: step2
    },
    {
      stepNumber: '03',
      category: 'CUSTOMIZED STRATEGY',
      title: 'Weight Loss Assessment',
      description: 'Our weight loss assessment helps us understand your current health status and set realistic goals. This ensures that your weight loss journey is safe, effective, and tailored to your needs.',
      image: step3
    },
    {
      stepNumber: '04',
      category: 'CUSTOMIZED STRATEGY',
      title: 'Coach Recommendations',
      description: 'Based on your assessment, your coach will recommend strategies and plans that are best suited for you. These recommendations are designed to help you achieve your goals efficiently.',
      image: step1
    },
    {
      stepNumber: '05',
      category: 'CUSTOMIZED STRATEGY',
      title: 'Purchase plan',
      description: 'Purchasing a plan provides you with a structured approach to achieving your goals. It includes personalized coaching sessions, resources, and continuous support to keep you on track.',
      image: step2
    },
    {
      stepNumber: '06',
      category: 'CUSTOMIZED STRATEGY',
      title: 'Start taking coaching',
      description: 'Start your coaching sessions and embark on your journey towards your goals. Your coach will guide you through each step, providing support, motivation, and expertise.',
      image: step3
    }
  ]
  </script>
  
  <style scoped>
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  </style>
  