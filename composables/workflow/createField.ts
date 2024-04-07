import { workflowApiFactory } from "@/apiFactory/workflow";

export const useCreateField = () => {
  const form = ref({
    name: "",
    desc: "",
    fieldType: "",
  });
  const processing = ref(false);
  const clearInputFields = () => {
    form.value.name = "";
    form.value.desc = "";
    form.value.fieldType = "";
  };
  const createField = async () => {
    processing.value = true;
    try {
      const payload = {
        name: form.value.name,
        description: form.value.desc,
        fieldType: form.value.fieldType,
      };
      await workflowApiFactory.createField(payload);
      clearInputFields();
    } catch (error) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      processing.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(form.value.name && form.value.desc && form.value.fieldType);
  });

  return { createField, form, processing, isFormEmpty };
};
