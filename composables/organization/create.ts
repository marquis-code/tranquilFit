import { organizationApiFactory } from "@/apiFactory/organization";

export const useCreateOrganization = () => {
  const loading = ref(false);
  const organizationPayload = ref({
    name: "",
    description: "",
    website: "",
    logo: "",
    actorId: "10"
  });

  const handleCreateOrganization = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.createOrganization(
        organizationPayload
      );
      return response.data;
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(organizationPayload.value.name && organizationPayload.value.description && organizationPayload.value.website && organizationPayload.value.logo);
  });

  return { handleCreateOrganization, organizationPayload, loading, isFormEmpty };
};
