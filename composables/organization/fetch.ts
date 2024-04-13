import { organizationApiFactory } from "@/apiFactory/organization";
import { useStorage } from "@vueuse/core";

const organizationList = ref([]) as any;

useStorage("organizations", { organizationList });
export const useFetchOrganization = () => {
  const loading = ref(false);
  const fetchOrganizations = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.fetchOrganization();
      organizationList.value = response.data.organizations;
    } catch (error) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchOrganizations, organizationList, loading };
};
