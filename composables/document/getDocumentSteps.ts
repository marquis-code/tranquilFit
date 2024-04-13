import { documentApiFactory } from "@/apiFactory/documents";
export const useGetStepsByDocumentId = () => {
  const documentId = useRoute().params.id;
  const documentSteps = ref([]) as any;
  const loading = ref(false);
  const getStepsByDocumentId = async () => {
    loading.value = true;
    try {
      const response = await documentApiFactory.getDocumentBasedOnStep(documentId);
      documentSteps.value = response.data.steps;
    } catch (error) {
      useNuxtApp().$toast.success(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  return { getStepsByDocumentId , documentSteps, loading };
};
