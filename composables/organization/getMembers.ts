import { organizationApiFactory } from "@/apiFactory/organization";

export const useFetchOrganizationMembers = () => {
  const loading = ref(false);
  const route = useRoute()
  const organizationMembersList = ref([
    {
      id: "string",
      firstName: "Success",
      lastName: "Anthony",
      email: "johndoe@yahoo.com",
      orgId: "455UIO",
      role: "ROLE_USER",
    },
  ]) as any;
  const fetchOrganizationMembers = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.getOrganizationMembers(route.params.id);
      organizationMembersList.value = response.data;
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchOrganizationMembers, organizationMembersList, loading };
};
