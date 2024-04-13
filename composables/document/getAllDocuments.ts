import { documentApiFactory } from "@/apiFactory/documents";

export const useGetAllDocuments = () => {
  const loading = ref(false);
  const documentsList = ref([]) as any;
  const getDocuments = async () => {
    loading.value = true;
    try {
      const response = await documentApiFactory.getDocumentsList();
      documentsList.value = response.data.documents;
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

  return { getDocuments, documentsList, loading };
};
