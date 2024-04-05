import { workflowApiFactory } from "@/apiFactory/workflow";
export const useGetWorkflowById = () => {
  const workflowId = useRoute().params.id;
  const workflowObject = ref({}) as any;
  const loading = ref(false);
  const getWorkflowById = async () => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflowsById(workflowId);
      console.log(response, 'response here')
      workflowObject.value = response.data.workflow;
    } catch (error) {
      useNuxtApp().$toast.success(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  return { getWorkflowById, workflowObject, loading };
};
