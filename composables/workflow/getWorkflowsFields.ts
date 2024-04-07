import { workflowApiFactory } from "@/apiFactory/workflow";

export const useFetchWorkflowsFields = () => {
  const loading = ref(false);
  const workflowFields = ref([]) as any;
  const fetchWorkflowFields = async () => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflowsFields();
      workflowFields.value = response.data.fields;
    } catch (error) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  return { fetchWorkflowFields, workflowFields, loading };
};
