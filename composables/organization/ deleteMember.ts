import { organizationApiFactory } from "@/apiFactory/organization";

export const useDeleteMember = () => {
  const loading = ref(false);
  const route = useRoute()
  const handleDeleteMember = async (userId: string) => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.deleteOrganizationMember(route.params.id, userId);
      return response.data;
    } catch (error) {
      return error
    } finally {
      loading.value = false;
    }
  };

  return { handleDeleteMember, loading };
};
