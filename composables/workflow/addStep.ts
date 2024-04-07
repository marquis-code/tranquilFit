import { workflowApiFactory } from "@/apiFactory/workflow";
const step = ref({
  title: "",
  description: "",
  index: "",
});
const currentIndex = ref(0);
const workflowId = ref('');
export const useAddStepToWorkflow = () => {
  const loading = ref(false);
  const stepsArray = ref([]) as any;
  const addStepToWorkflow = async (data: any) => {
    const newArray = stepsArray.value.map(({index, ...rest}) => ({ ...rest }))
    const payload = {
      steps: newArray,
    };

    try {
      loading.value = true;
      const response = await workflowApiFactory.addStepToWorkflow(
        workflowId.value,
        payload
      );
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success("Steps added were saved successfully", {
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

  const handleTemporarySave = (selectedData: any, data: any) => {
    workflowId.value = selectedData
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
        // id: selectedData,
        index: currentIndex.value,
        title: data.title,
        description: data.description,
      });
      currentIndex.value++;
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
