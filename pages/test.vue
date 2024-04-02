<template>
    <div class="p-4 space-y-4">
      <div>
        <input v-model="currentWorkflow.name" placeholder="Workflow Name" class="input" />
        <textarea v-model="currentWorkflow.description" placeholder="Workflow Description" class="textarea"></textarea>
      </div>
      <div>
        <button @click="addStep" class="btn">Add Step</button>
        <button @click="createWorkflow" class="btn-green">Create Workflow</button>
      </div>
      <!-- Simplified step list; consider enhancing with step editing and deletion -->
      <div v-for="step in currentWorkflow.steps" :key="step.id" class="step-item">
        <p>{{ step.name }}: {{ step.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { currentWorkflow, createWorkflow, addStepToCurrentWorkflow } from '@/composables/workflow/useWorkflow';
  import { Step } from '@/interfaces/workflow';
  
  const newStep = ref<Step>({ id: '', name: '', description: '', fieldType: 'TYPE_NONE' });
  
  const addStep = () => {
    addStepToCurrentWorkflow({...newStep.value}); // Clone to avoid reactivity issues
    newStep.value = { id: '', name: '', description: '', fieldType: 'TYPE_NONE' }; // Reset new step form
  };
  </script>
  
  <style>
  /* Add Tailwind CSS styles for .input, .textarea, .btn, .btn-green, .step-item */
  </style>
  