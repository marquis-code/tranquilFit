import { organizationApiFactory } from "@/apiFactory/organization";

export const useDeleteMember = () => {
  const loading = ref(false);
  const route = useRoute();
  const handleDeleteMember = async (userId: string) => {
    loading.value = true;
    organizationApiFactory
      .deleteOrganizationMember(route.params.id, userId)
      .then((response) => {
        if (typeof response === "undefined") {
          return;
        } else {
          useNuxtApp().$toast.success('Organization Member was successfully deleted', {
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

  return { handleDeleteMember, loading };
};
