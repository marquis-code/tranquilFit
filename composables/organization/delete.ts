import { organizationApiFactory } from "@/apiFactory/organization";
import Swal from "sweetalert2";
export const useDeleteOrganization = () => {
  const loading = ref(false);
  const handleDeleteOrganization = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.value) {
        await proceedToDelete(id)
      } else {
        Swal.fire("Cancelled", "Action was cancelled", "info");
      }
    });
  };

  const proceedToDelete = async (id: string) => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.deleteOrganization(id);
      console.log(response, 'res here')
      useNuxtApp().$toast.error('Organization was deleted successfully', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      // return response.data;
    } catch (error) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  }

  return { handleDeleteOrganization, loading };
};
