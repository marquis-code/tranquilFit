import { documentApiFactory } from "@/apiFactory/documents";
export const useGetDocumentByWorkflowId = () => {
  const workflowId = ref(useRoute().params.id);
  const documentList = ref([]) as any;
  const loading = ref(false);
  const getDocumentByWWorkflowId = async (id: string) => {
    const updatedWorkflowId = workflowId.value ? workflowId.value : id
    loading.value = true;
    try {
      const response = await documentApiFactory.getDocumentBasedOnWorkflow(
        updatedWorkflowId
      );
      if (typeof response !== "undefined") {
        documentList.value = response.data.documents;
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

  return { getDocumentByWWorkflowId, documentList, loading };
};
