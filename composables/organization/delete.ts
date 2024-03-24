import { organizationApiFactory } from "@/apiFactory/organization";

export const useDeleteOrganization = () => {
  const loading = ref(false);
  const handleDeleteOrganization = async (id: string) => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.deleteOrganization(id);
      return response.data;
    } catch (error) {
      return error
    } finally {
      loading.value = false;
    }
  };

  return { handleDeleteOrganization, loading };
};
