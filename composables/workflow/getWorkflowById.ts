import { workflowApiFactory } from "@/apiFactory/workflow";

export const useFetchWorkflowById = () => {
  const loading = ref(false);
  const workflow  = ref({}) as any
  const fetchWorkflowById = async (id: string) => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflowsById(id);
      workflow.value = response.data
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchWorkflowById, workflow, loading };
};
