<template>
  <div class="flex flex-col items-center justify-center p-4">
    <div class=" w-full space-y-4">
      <div class="w-full">
        <input v-model="workflowName" type="text" placeholder="Workflow Name"
          class="border border-gray-200 rounded-md py-2.5 px-3 outline-none w-full text-sm">
      </div>
      <div class="w-full">
        <textarea v-model="workflowDescription" type="text" placeholder="Workflow Description"
          class="border border-gray-200 rounded-md py-2.5 px-3 outline-none w-full resize-none text-sm" rows="4"
          cols="5"></textarea>
      </div>
      <div class="flex justify-end items-end gap-x-3">
        <button @click="handleWorkFlow" class="bg-black text-white rounded-md text-xs py-2.5 px-4">Create new
          Step</button>
        <button @click="toggleExistingStepsVisibility" class="bg-black text-white rounded-md text-xs py-2.5 px-4">{{
          !showPreExistingFields ? 'Show' : 'Hide' }}
          pre-existing steps</button>
      </div>
      <div v-if="showPreExistingFields" class="h-60 overflow-y-auto">
        <fieldset>
          <legend class="sr-only">Notifications</legend>
          <div class="space-y-5">
            <div class="relative flex items-start" v-for="itm in workflowSteps" :key="itm.id">
              <div class="flex h-6 items-center">
                <input :id="itm.name" aria-describedby="comments-description" :name="itm.name" type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
              </div>
              <div class="ml-3 text-sm leading-6">
                <div class="flex items-center gap-x-2">
                  <label :for="itm.name" class="font-medium text-gray-900">{{ itm.name }}</label>
                  <span class="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">{{ itm.workflow }}</span>
                </div>
                <p id="comments-description" class="text-gray-500">{{ itm.description }}</p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    <div class="w-full space-y-4 mt-10" v-if="selectedWorkflowIndex !== null">
      <div class="w-full">
        <input v-model="stepName" type="text" placeholder="Step Name"
          class="border border-gray-200 rounded-md py-2.5 px-3 outline-none w-full resize-none text-sm">
      </div>
      <div class="w-full">
        <textarea v-model="stepDescription" type="text" placeholder="Step Description"
          class="border border-gray-200 rounded-md py-2.5 px-3 outline-none w-full resize-none text-sm" rows="4"
          cols="5"></textarea>
        <!-- <textarea v-model="stepDescription" type="text" placeholder="Step Description" class="w-full border py-2.5 px-3"></textarea></textarea> -->
      </div>
      <div class="w-full">
        <select v-model="stepType"
          class="border border-gray-200 rounded-md py-2.5 px-3 outline-none w-full resize-none text-sm">
          <option :value="itm.type" v-for="itm in workflowSteps" :key="itm.id">{{ itm.name }}</option>
        </select>
      </div>
      <div class="flex justify-end items-end gap-x-3 pt-10">
        <button @click="addStep" class="bg-green-950 text-white rounded-md px-6 py-2.5 text-sm">Save and add another
          step</button>
        <button class="bg-green-950 text-white rounded-md px-6 py-2.5 text-sm">Save Workflow</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchWorkflowSteps } from '@/composables/workflow/getWorkflowSteps'
const { workflowSteps, loading } = useFetchWorkflowSteps()
// import { ref } from 'vue';
import { useWorkflow } from '@/stores/workflows';
definePageMeta({
  layout: 'daashboard'
})

const { addWorkflow, addStepToWorkflow } = useWorkflow();

const workflowName = ref('');
const workflowDescription = ref('');
const stepName = ref('');
const stepDescription = ref('');
const stepType = ref('TYPE_NONE') as any;

const selectedWorkflowIndex = ref<number | null>(null);

const showPreExistingFields = ref(false)

function handleWorkFlow() {
  const workflow = {
    id: String(Math.floor(Math.random() * 90) + 10),
    name: workflowName.value,
    description: workflowDescription.value,
    // createdBy: createdBy.value,
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
    selectedWorkflowIndex.value++
    clearStepForm();
  }
}

function clearWorkflowForm() {
  workflowName.value = '';
  workflowDescription.value = '';
  // createdBy.value = '';
}

function clearStepForm() {
  stepName.value = '';
  stepDescription.value = '';
  stepType.value = 'TYPE_NONE';
}

const toggleExistingStepsVisibility = () => {
  showPreExistingFields.value = !showPreExistingFields.value
}
</script>
