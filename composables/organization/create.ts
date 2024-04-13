import { organizationApiFactory } from "@/apiFactory/organization";

export const useCreateOrganization = () => {
  const loading = ref(false);
  const organizationPayload = ref({
    name: "",
    description: "",
    website: "",
    logo: "" as any,
  });

  const handleCreateOrganization = async () => {
    loading.value = true;
    try {
      const payload = {
        name: organizationPayload.value.name,
        description: organizationPayload.value.description,
        website: organizationPayload.value.website,
        logo: organizationPayload.value.logo,
      };
      const response = await organizationApiFactory.createOrganization(payload);
      if (response.status === 200) {
        useNuxtApp().$toast.success("Organization was successfully created", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
        useRouter().push("/dashboard/organization");
      }
    } catch (error) {
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
