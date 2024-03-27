import { reactive, toRefs } from "vue";

interface Step {
  name: string;
  description: string;
  fieldType: "TYPE_NONE";
}

interface Workflow {
  name: string;
  description: string;
  createdBy: string;
  steps: Step[];
}

const state = reactive({
  workflows: [] as Workflow[],
});

function addWorkflow(workflow: Workflow) {
  state.workflows.push(workflow);
}

function addStepToWorkflow(workflowIndex: number, step: any) {
  console.log(workflowIndex, step)
  state.workflows[workflowIndex].steps.push(step);
}

function deleteWorkflow(workflowId: string) {
  state.workflows = state.workflows.filter((w) => w.id !== workflowId);
}

function editWorkflow(workflowId: string, updatedWorkflow: Workflow) {
  const index = state.workflows.findIndex((w) => w.id === workflowId);
  if (index !== -1) {
    state.workflows[index] = updatedWorkflow;
  }
}

export function useWorkflow() {
  return {
    ...toRefs(state),
    addWorkflow,
    addStepToWorkflow,
    deleteWorkflow,
    editWorkflow,
  };
}
