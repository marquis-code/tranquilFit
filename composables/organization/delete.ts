import { organizationApiFactory } from "@/apiFactory/organization";
export const useDeleteOrganization = () => {
  const loading = ref(false);
  const handleDeleteOrganization = async (id: string) => {
    loading.value = true;
    organizationApiFactory
      .deleteOrganization(id)
      .then((response) => {
        if (typeof response === "undefined") {
          return;
        } else {
          useNuxtApp().$toast.success('Organization was successfully created', {
            autoClose: 5000,
            dangerouslyHTMLString: true,
          });
        }
      })
      .catch((error) => {
        useNuxtApp().$toast.error(error.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return { handleDeleteOrganization, loading };
};
