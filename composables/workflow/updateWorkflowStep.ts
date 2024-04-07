import { workflowApiFactory } from "@/apiFactory/workflow";

export const useUpdateWorkflowSteps = () => {
  const loading = ref(false);
  const stepsPayload = ref({
    fields: [],
  });

  const updateWorkflowSteps = async (id: string) => {
    loading.value = true;
    try {
      await workflowApiFactory.updateWorkflowSteps(id, {
        fieldIds: stepsPayload.value,
      });
      useNuxtApp().$toast.success('Fields were added successfully!', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } catch (error) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  const prefillPayload = (data: any) => {
    stepsPayload.value = data;
  };

  return { updateWorkflowSteps, loading, prefillPayload };
};
