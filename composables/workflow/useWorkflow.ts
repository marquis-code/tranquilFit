export interface WorkflowStep {
  id: string;
  name: string;
  description: string;
  type: string; // Define your step types here
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
}


export function useWorkflow() {
  const workflows = ref<Workflow[]>([]);

  const addWorkflow = (workflow: Workflow) => {
    workflows.value.push({ ...workflow, id: Math.random().toString() });
  };

  const addStepToWorkflow = (workflowId: string, step: WorkflowStep) => {
    const workflowIndex = workflows.value.findIndex((w) => w.id === workflowId);
    if (workflowIndex !== -1) {
      workflows.value[workflowIndex].steps.push({
        ...step,
        id: Math.random().toString(),
      });
    }
  };

  // Persist workflows to local storage (optional)
  watch(
    workflows,
    (newWorkflows) => {
      localStorage.setItem("workflows", JSON.stringify(newWorkflows));
    },
    { deep: true }
  );

  // Load workflows from local storage (optional)
  const loadWorkflows = () => {
    const storedWorkflows = localStorage.getItem("workflows");
    if (storedWorkflows) {
      workflows.value = JSON.parse(storedWorkflows);
    }
  };

  return { workflows, addWorkflow, addStepToWorkflow, loadWorkflows };
}
