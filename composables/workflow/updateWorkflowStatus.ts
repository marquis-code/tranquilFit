import { workflowApiFactory } from "@/apiFactory/workflow";

export const useUpdateWorkflowStatus = () => {
  const loading = ref(false);
  const handleStatusUpdate = async (id: string, payload: any) => {
    try {
      loading.value = true;
      const response = await workflowApiFactory.updateWorkflowStatus(
        id,
        payload
      );
      if (typeof response !== "undefined") {
        useNuxtApp().$toast.success(
          "Workflow status was updated successfully",
          {
            autoClose: 5000,
            dangerouslyHTMLString: true,
          }
        );
      }
    } catch (error) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  };

  return {
    handleStatusUpdate,
    loading,
  };
};
