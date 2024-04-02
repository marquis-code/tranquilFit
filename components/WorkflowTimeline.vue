<template>
  <div class="timeline-container shadow">
    <div class="workflow" v-for="(workflow, index) in workflows" :key="index">
      <div class="workflow-header">
        <h3>{{ workflow.name }}</h3>
        <p>{{ workflow.description }}</p>
      </div>
      <div class="border-l-2">
        <!-- Card 1 -->
        <div v-for="(step, sIndex) in workflow.steps" :key="sIndex"
          class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <!-- Dot Follwing the Left Vertical Line -->
          <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
          </div>

          <!-- Line that connecting the box with the vertical line -->
          <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

          <!-- Content that showing in the box -->
          <div class="flex-auto">
            <h1 class="text-base font-bold">{{ step.name }}</h1>
            <h1 class="text-sm font-light">{{ step.description }}</h1>
          </div>
          <a href="#" class="text-center text-sm bg-white rounded-full p-2 shadow-md text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="#4a4a4a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue';
import { useWorkflow } from '@/stores/workflows';

const { workflows } = useWorkflow();

// const formattedWorkflows = computed(() => {
//   return workflows.value.map((workflow: any) => {
//     return {
//       ...workflow,
//       // Any additional formatting or computations can go here
//     };
//   });
// });

// console.log(formattedWorkflows.value, 'formatted')
</script>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.workflow {
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 0.5rem;
}

.workflow-header h3 {
  margin: 0;
  color: #333;
}

.workflow-header p {
  margin: 0.5rem 0;
  color: #666;
}

.workflow-steps {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.step {
  position: relative;
}

.dot {
  height: 20px;
  width: 20px;
  background-color: #007bff;
  border-radius: 50%;
  display: inline-block;
}

.step-info {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 0.5rem;
  white-space: nowrap;
}

.step:hover .step-info {
  display: block;
}
</style>