import { workflowApiFactory } from "@/apiFactory/workflow";

export const useFetchWorkflowsFields = () => {
  const loading = ref(false);
  const workflowFields  = ref([]) as any
  const fetchWorkflowFields = async (id: string) => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflowsFields();
      workflowFields.value = response.data
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchWorkflowFields, workflowFields, loading };
};
