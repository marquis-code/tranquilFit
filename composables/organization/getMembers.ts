import { organizationApiFactory } from "@/apiFactory/organization";
import { useStorage } from "@vueuse/core";

export const useFetchOrganizationMembers = () => {
  const loading = ref(false);
  const route = useRoute();
  const organizationMembersList = ref([]) as any;

  useStorage("members", { organizationMembersList });

  const fetchOrganizationMembers = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.getOrganizationMembers(
        useRoute().params.id
      );
      organizationMembersList.value = response.data;
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchOrganizationMembers, organizationMembersList, loading };
};
