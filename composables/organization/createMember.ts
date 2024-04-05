import { organizationApiFactory } from "@/apiFactory/organization";

export const useCreateOrganizationMember = () => {
  const loading = ref(false);
  const memberPayload = ref({
    name: "",
    description: "",
    website: "",
    logo: "",
    // actorId: "10",
    organizationId: useRoute().params.id
  });

  const handleCreateMember = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.createOrganizationMember(useRoute().params.id, 
        memberPayload
      );
      return response.data;
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(memberPayload.value.name && memberPayload.value.description && memberPayload.value.website && memberPayload.value.logo);
  });

  return { handleCreateMember, memberPayload, loading, isFormEmpty };
};
