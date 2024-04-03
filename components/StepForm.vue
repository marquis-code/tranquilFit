<template>
    <div class="flex flex-col space-y-2">
      <label for="stepName">Step Name:</label>
      <input type="text" v-model="step.name" id="stepName" class="p-2 rounded border" />
      <label for="stepDescription">Description:</label>
      <textarea v-model="step.description" id="stepDescription" class="p-2 rounded border"></textarea>
      <label for="stepType">Step Type:</label>
      <select v-model="step.type" id="stepType" class="p-2 rounded border">
        <option value="" disabled selected>Select Type</option>
        <option value="approval">Approval</option>
        <option value="task">Task</option>
        <option value="notification">Notification</option>
      </select>
      <button @click="$emit('save', step)">Save Step</button>
      <button @click="$emit('close')">Close</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { WorkflowStep } from '@/composables/workflow/useWorkflow';

  const props = defineProps<{
    workflowId: string;
  }>();
  
  const step = ref<WorkflowStep>({
    name: '',
    description: '',
    type: '',
  });
  
  const emit = defineEmits(['save', 'close']);
  
  </script>
  