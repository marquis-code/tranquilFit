import { organizationApiFactory } from "@/apiFactory/organization";
import { useStorage } from "@vueuse/core";

const organizationList = ref([
  {
    id: "1355b6b1-bf4b-4b1d-951a-8e9c67230740",
    name: "Methgwybnihmi Finance Group",
    description: "The Methgwybnihmi Finance Group is a leading financial.",
    createdAt: "2024-03-27T07:20:01.129Z",
    website: "https://bonukexslz.com",
    logo: "data:image/svg+xml;base64,Me",
  },
  {
    id: "34963a48-6d83-4787-9c89-72e226116c82",
    name: "Jotgd Finance Group",
    description: "The Jotgd Finance Group is a leading financial ",
    createdAt: "2024-03-27T07:20:01.129Z",
    website: "https://xhwokgiypj.com",
    logo: "data:image/svg+xml;base64,Jo",
  },
  {
    id: "dfaf8680-ca36-41f2-8ba0-171496f74b65",
    name: "Slzlgmnls Finance Group",
    description: "The Slzlgmnls Finance Group is a leading",
    createdAt: "2024-03-27T07:20:01.130Z",
    website: "https://locyogirko.com",
    logo: "data:image/svg+xml;base64,Sl",
  },
  {
    id: "123f91cd-0c16-4014-ae1c-b85b9600086a",
    name: "Mnpyddnzvfj Finance Group",
    description: "The Mnpyddnzvfj Finance Group is a leading ",
    createdAt: "2024-03-27T07:20:01.130Z",
    website: "https://wckspavmrn.com",
    logo: "data:image/svg+xml;base64,Mn",
  },
]) as any;

useStorage("organizations", { organizationList });
export const useFetchOrganization = () => {
  const loading = ref(false);
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
