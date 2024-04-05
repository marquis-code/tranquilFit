import { organizationApiFactory } from "@/apiFactory/organization";
// import { useFetchOrganization } from "@/composables/organization/fetch";
// import { generateUUID } from '@/utils/generateUUID';
// import { generateCurrentDateISO } from '@/utils/generateDate';
// const { organizationList } = useFetchOrganization();

export const useCreateOrganization = () => {
  const loading = ref(false);
  const organizationPayload = ref({
    name: "",
    description: "",
    website: "",
    logo: "" as any,
    // actorId: "10",
  });

  const handleCreateOrganization = async () => {
    loading.value = true;
    try {
      const payload = {
        name: organizationPayload.value.name,
        description: organizationPayload.value.description,
        website: organizationPayload.value.website,
        logo: organizationPayload.value.logo,
        // actorId: "10",
      };
      const response = await organizationApiFactory.createOrganization(payload);
      useNuxtApp().$toast.success("Organization was successfully created", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      useRouter().push("/dashboard/organization");
      return response.data;
    } catch (error) {
      console.log(error.message, error)
      useNuxtApp().$toast.success(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(
      organizationPayload.value.name &&
      organizationPayload.value.description &&
      organizationPayload.value.website &&
      organizationPayload.value.logo
    );
  });

  return {
    handleCreateOrganization,
    organizationPayload,
    loading,
    isFormEmpty,
  };
};
