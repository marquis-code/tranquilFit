import { workflowApiFactory } from "@/apiFactory/workflow";

export const useUpdateWorkflowSteps = () => {
  const loading = ref(false);
  const stepsPayload = ref({
    name: '',
    desc: ''
  })

  const updateWorkflowSteps = async (id: string) => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.updateWorkflowSteps(id, stepsPayload);
      return response.data
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { updateWorkflowSteps, stepsPayload, loading };
};
