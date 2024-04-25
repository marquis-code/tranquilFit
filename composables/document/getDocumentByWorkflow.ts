import { documentApiFactory } from "@/apiFactory/documents";
export const useGetDocumentByWorkflowId = () => {
  const workflowId = ref(useRoute().params.id);
  const documentList = ref([]) as any;
  const loading = ref(false);
  const getDocumentByWWorkflowId = async (id: string) => {
    console.log(id, 'id from composable')
    workflowId.value = id
    loading.value = true;
    try {
      const response = await documentApiFactory.getDocumentBasedOnWorkflow(
        workflowId.value
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
