<template>
    <div class="flex flex-col items-center justify-center p-4">
      <div class="mb-4">
        <input v-model="workflowName" type="text" placeholder="Workflow Name" class="input">
        <input v-model="workflowDescription" type="text" placeholder="Workflow Description" class="input">
        <input v-model="createdBy" type="text" placeholder="Created By" class="input">
        <button @click="handleWorkFlow" class="btn">Create Workflow</button>
      </div>
      <div v-if="selectedWorkflowIndex !== null">
        <input v-model="stepName" type="text" placeholder="Step Name" class="input">
        <input v-model="stepDescription" type="text" placeholder="Step Description" class="input">
        <select v-model="stepType" class="input">
          <option value="TYPE_NONE">None</option>
          <option value="Textarea">Text Area</option>
          <option value=Dropdown>Dropdown</option>
          <option value=Upload>Upload</option>
        </select>
        <button @click="addStep" class="btn">Add Step</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // import { ref } from 'vue';
  import { useWorkflow } from '@/stores/workflows';
  definePageMeta({
    layout: 'daashboard'
  })
  
  const { addWorkflow, addStepToWorkflow } = useWorkflow();
  
  const workflowName = ref('');
  const workflowDescription = ref('');
  const createdBy = ref('');
  const stepName = ref('');
  const stepDescription = ref('');
  const stepType = ref('TYPE_NONE');
  
  const selectedWorkflowIndex = ref<number | null>(null);
  
  function handleWorkFlow() {
    const workflow = {
      name: workflowName.value,
      description: workflowDescription.value,
      createdBy: createdBy.value,
      steps: []
    };
    addWorkflow(workflow);
    selectedWorkflowIndex.value = 0; // For simplicity, select the first (or newly added) workflow
    clearWorkflowForm();
  }
  
  function addStep() {
    if (selectedWorkflowIndex.value !== null) {
      const step = {
        name: stepName.value,
        description: stepDescription.value,
        fieldType: stepType.value
      };
      addStepToWorkflow(selectedWorkflowIndex.value, step);
      clearStepForm();
    }
  }
  
  function clearWorkflowForm() {
    workflowName.value = '';
    workflowDescription.value = '';
    createdBy.value = '';
  }
  
  function clearStepForm() {
    stepName.value = '';
    stepDescription.value = '';
    stepType.value = 'TYPE_NONE';
  }
  </script>
  
  <style scoped>
  .input {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 2px solid #ddd;
    border-radius: 0.25rem;
  }
  .btn {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  