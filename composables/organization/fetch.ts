import { organizationApiFactory } from "@/apiFactory/organization";

export const useFetchOrganization = () => {
  const loading = ref(false);
  const organizationList = ref([
    {
      id: "2",
      name: "Sickle Cell Center",
      description: "string",
      createdAt: "2024-03-24T21:25:35.490Z",
      website: "string",
      logo: "string",
    },
  ]) as any;
  const fetchOrganizations = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.fetchOrganization();
      organizationList.value = response.data;
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchOrganizations, organizationList, loading };
};
