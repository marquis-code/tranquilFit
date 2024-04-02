// useWorkflows.ts
import { ref, reactive } from 'vue';
import { Workflow, Step } from '@/interfaces/workflow';

export const workflows = ref<Workflow[]>([]);
export const currentWorkflow = reactive<Workflow>({
  id: '',
  name: '',
  description: '',
  steps: [],
});

export function createWorkflow() {
  const newWorkflow = { ...currentWorkflow, id: Date.now().toString() };
  workflows.value.push(newWorkflow);
  resetCurrentWorkflow();
}

export function addStepToCurrentWorkflow(step: Step) {
  step.id = Date.now().toString(); // Generate a unique ID for the step
  currentWorkflow.steps.push(step);
}

export function resetCurrentWorkflow() {
  currentWorkflow.id = '';
  currentWorkflow.name = '';
  currentWorkflow.description = '';
  currentWorkflow.steps = [];
}

export function updateStepInWorkflow(stepId: string, updatedStep: Step) {
  const stepIndex = currentWorkflow.steps.findIndex(s => s.id === stepId);
  if (stepIndex !== -1) {
    currentWorkflow.steps[stepIndex] = updatedStep;
  }
}

export function deleteStepFromWorkflow(stepId: string) {
  currentWorkflow.steps = currentWorkflow.steps.filter(s => s.id !== stepId);
}
