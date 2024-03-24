import { workflowApiFactory } from "@/apiFactory/workflow";

export const useFetchWorkflowSteps = () => {
  const loading = ref(false);
  const workflowSteps  = ref([]) as any
  const fetchWorkflowSteps = async (id: string) => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflowSteps(id);
      workflowSteps.value = response.data
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchWorkflowSteps, workflowSteps, loading };
};
