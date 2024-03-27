import { organizationApiFactory } from "@/apiFactory/organization";
import { useStorage } from "@vueuse/core";

export const useFetchOrganizationMembers = () => {
  const loading = ref(false);
  const route = useRoute();
  const organizationMembersList = ref([
    {
      id: "da7cccc0-4ac0-4f14-b0b7-286feb3d6e36",
      firstName: "Jane",
      lastName: "Brown",
      email: "jane.brown@hotmail.com",
      orgId: "CGKSNZ",
      role: "ROLE_USER",
    },
    {
      id: "da7cccc0-4ac0-4f14-b0b7-286feb3d6e36",
      firstName: "David",
      lastName: "Jones",
      email: "david.jones@outlook.com",
      orgId: "ZRWAUW",
      role: "ROLE_FINANCE",
    },
    {
      id: "da7cccc0-4ac0-4f14-b0b7-286feb3d6e36",
      firstName: "Chris",
      lastName: "Williams",
      email: "chris.williams@yahoo.com",
      orgId: "6FBM2X",
      role: "ROLE_HR",
    },
    {
      id: "da7cccc0-4ac0-4f14-b0b7-286feb3d6e36",
      firstName: "Laura",
      lastName: "Johnson",
      email: "laura.johnson@yahoo.com",
      orgId: "YX4QW7",
      role: "ROLE_ADMIN",
    },
  ]) as any;

  useStorage("members", { organizationMembersList });

  const fetchOrganizationMembers = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.getOrganizationMembers(
        route.params.id
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
