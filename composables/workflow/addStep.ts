import { workflowApiFactory } from "@/apiFactory/workflow";
const step = ref({
  title: "",
  description: "",
  index: "",
});
const currentIndex = ref(1);
const workflowId = useRoute().params.id;
export const useAddStepToWorkflow = () => {
  const loading = ref(false);
  const stepsArray = ref([]) as any;
  const addStepToWorkflow = async () => {
    const payload = {
      steps: stepsArray.value,
    };

    try {
      loading.value = true;
      const response = await workflowApiFactory.addStepToWorkflow(
        workflowId,
        payload
      );
      console.log(response);
      useNuxtApp().$toast.success('Steps added were saved successfully', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } catch (error) {
      useNuxtApp().$toast.success(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  const handleTemporarySave = (data: any) => {
    const alreadyExist = stepsArray.value.find(
      (itm: any) => itm.index === data.index
    );
    if (alreadyExist) {
      useNuxtApp().$toast.success("This step already exist", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return;
    } else {
      stepsArray.value.push({
        id: workflowId,
        index: currentIndex.value,
        title: data.title,
        description: data.description,
      });
      currentIndex.value++
    }
  };

  return {
    addStepToWorkflow,
    loading,
    stepsArray,
    handleTemporarySave,
    step,
  };
};
