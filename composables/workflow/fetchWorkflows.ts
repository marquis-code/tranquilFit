import { workflowApiFactory } from "@/apiFactory/workflow";
import { useStorage } from "@vueuse/core";
const workflowList = ref([]) as any;

useStorage("workflows", { workflowList });
export const useFetchWorkflows = () => {
  const loading = ref(false);
  const fetchWorkflows = async () => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflows();
      workflowList.value = response.data.workflows ?? [];
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchWorkflows, workflowList, loading };
};
