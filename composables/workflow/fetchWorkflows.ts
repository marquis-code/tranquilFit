import { workflowApiFactory } from "@/apiFactory/workflow";

export const useFetchWorkflows = () => {
  const loading = ref(false);
  const workflowList  = ref([]) as any
  const fetchWorkflows = async () => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflows();
      workflowList.value = response.data
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchWorkflows, workflowList, loading };
};
