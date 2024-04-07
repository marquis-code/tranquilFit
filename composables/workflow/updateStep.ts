import { workflowApiFactory } from "@/apiFactory/workflow";

export const useUpdateSteps = () => {
  const loading = ref(false);
  const payload = ref({
    title: "",
    description: "",
  });

  const updateStep = async (id: string) => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.updateWorkflowStep(
        id,
        payload.value
      );
      console.log(response, 'res here')
      if (typeof response !== "undefined") {
        useNuxtApp().$toast.success("Fields were added successfully!", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      }
    } catch (error) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  const prefillUploadForm = (data: any) => {
    payload.value.title = data.title;
    payload.value.description = data.description;
  };

  return { updateStep, loading, prefillUploadForm };
};
