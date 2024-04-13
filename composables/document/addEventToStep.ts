import { documentApiFactory } from "@/apiFactory/documents";

export const useAddEventToStep = () => {
  const loading = ref(false);
  const requestPayload = ref({
    actor: "",
    type: "",
    message: "",
    createdAt: new Date(),
  });
  const handleAddEventToStep = async (
    documentId: any,
    documentStepId: any
  ) => {
    loading.value = true;
    try {
      const response = await documentApiFactory.updateDocumentStep(
        documentId,
        documentStepId,
        {
          event: requestPayload.value,
        }
      );
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success("New event was successfully added", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      }
    } catch (error) {
      useNuxtApp().$toast.success(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  const populateRequestPayload = (data) => {
    (requestPayload.value.actor = data.actor),
      (requestPayload.value.type = data.type),
      (requestPayload.value.message = data.message),
      (requestPayload.value.createdAt = data.createdAt);
  };

  return { handleAddEventToStep, populateRequestPayload, loading };
};
