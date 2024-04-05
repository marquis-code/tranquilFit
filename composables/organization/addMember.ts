import { organizationApiFactory } from "@/apiFactory/organization";

export const useAddOrganizationMember = () => {
  const loading = ref(false);
  const memberPayload = ref({
    userId: "",
    role: "",
  });

  const handleAddMember = async () => {
    const payload = {
      userId: memberPayload.value.userId,
      role: memberPayload.value.role,
    };
    loading.value = true;
    try {
      const response = await organizationApiFactory.createOrganizationMember(
        useRoute().params.id,
        payload
      );
      console.log(response, "here");
      //   return response.data;
    //   if (response.status == 500) {
    //     useNuxtApp().$toast.error(
    //       response.data.message,
    //       {
    //         autoClose: 5000,
    //         dangerouslyHTMLString: true,
    //       }
    //     );
    //   }else {
    //     useNuxtApp().$toast.success(
    //         response.data.message,
    //         {
    //           autoClose: 5000,
    //           dangerouslyHTMLString: true,
    //         }
    //       );
    //   }
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

  const isFormEmpty = computed(() => {
    return !!(memberPayload.value.role && memberPayload.value.userId);
  });

  return { handleAddMember, memberPayload, loading, isFormEmpty };
};
