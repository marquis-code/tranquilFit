import { documentApiFactory } from "@/apiFactory/documents";
export const useGetDocumentById = () => {
  const documentId = useRoute().params.id;
  const documentObject = ref({}) as any;
  const loading = ref(false);
  const getDocumentById = async () => {
    loading.value = true;
    try {
      const response = await documentApiFactory.getDocumentsById(documentId);
      documentObject.value = response.data.document;
    } catch (error) {
      useNuxtApp().$toast.success(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  return { getDocumentById, documentObject, loading };
};
