<template>
    <div class="timeline-container">
      <div class="workflow" v-for="(workflow, index) in workflows" :key="index">
        <div class="workflow-header">
          <h3>{{ workflow.name }}</h3>
          <p>{{ workflow.description }}</p>
        </div>
        <div class="workflow-steps">
          <div class="step" v-for="(step, sIndex) in workflow.steps" :key="sIndex">
            <div class="dot"></div>
            <div class="step-info">
              <p>{{ step.name }}</p>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // import { computed } from 'vue';
  import { useWorkflow } from '@/stores/workflows';
  
  const { workflows } = useWorkflow();
  
  const formattedWorkflows = computed(() => {
    return workflows.value.map((workflow: any) => {
      return {
        ...workflow,
        // Any additional formatting or computations can go here
      };
    });
  });
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
  