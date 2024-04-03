<template>
    <div class="flex flex-col space-y-2">
      <label for="name">Workflow Name:</label>
      <input type="text" v-model="workflow.name" id="name" class="p-2 rounded border" />
      <label for="description">Description:</label>
      <textarea v-model="workflow.description" id="description" class="p-2 rounded border"></textarea>
      <button @click="$emit('save', workflow)">Save Workflow</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { Workflow } from '@/composables/workflow/useWorkflow';
  
  const props = defineProps<{
    workflow: Workflow;
  }>();
  
  const emit = defineEmits(['save']);
  
  </script>