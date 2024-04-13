import { documentApiFactory } from "@/apiFactory/documents";

export const useCreateDocument = () => {
  const loading = ref(false);
  const documentPayload = ref({
    workflowId: ''
  })

  const createDocument = async () => {
    loading.value = true;
    try {
      const response = await documentApiFactory.createDocument(documentPayload.value);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success('New document was successfully created', {
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


  const isCreateFormEmpty = computed(() => {
    return documentPayload.value.workflowId
  })

  return { createDocument, documentPayload, loading, isCreateFormEmpty };
};
