import { organizationApiFactory } from "@/apiFactory/organization";

export const useFetchOrganization = () => {
  const loading = ref(false);
  const organizationList  = ref([]) as any
  const fetchOrganizations = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.fetchOrganization();
      organizationList.value = response.data
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchOrganizations, organizationList, loading };
};
