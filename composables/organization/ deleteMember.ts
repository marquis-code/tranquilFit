import { organizationApiFactory } from "@/apiFactory/organization";

export const useDeleteMember = () => {
  const loading = ref(false);
  const handleDeleteMember = async (organizationId: string, userId: string) => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.deleteOrganizationMember(organizationId, userId);
      return response.data;
    } catch (error) {
      return error
    } finally {
      loading.value = false;
    }
  };

  return { handleDeleteMember, loading };
};
