import { documentApiFactory } from "@/apiFactory/documents";

export const useCreateDocument = () => {
  const loading = ref(false);
  const documentPayload = ref({
    workflowId: ''
  })

  const createDocument = async (id: string) => {
    loading.value = true;
    try {
      const response = await documentApiFactory.createDocument(documentPayload.value);
      return response.data
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { createDocument, documentPayload, loading };
};
