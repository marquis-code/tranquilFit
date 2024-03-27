import { organizationApiFactory } from "@/apiFactory/organization";
import { useFetchOrganization } from "@/composables/organization/fetch";
import { generateUUID } from '@/utils/generateUUID';
import { generateCurrentDateISO } from '@/utils/generateDate';
const { organizationList } = useFetchOrganization();

export const useCreateOrganization = () => {
  const loading = ref(false);
  const organizationPayload = ref({
    name: "",
    description: "",
    website: "",
    logo: "",
    actorId: "10",
  });

  const handleCreateOrganization = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.createOrganization(
        organizationPayload
      );
      useNuxtApp().$toast.success("Organization was successfully created", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return response.data;
    } catch (error) {
      // useNuxtApp().$toast.success('Something went wrong', {
      //   autoClose: 5000,
      //   dangerouslyHTMLString: true,
      // });
      return error;
    } finally {
      useRouter().push("/dashboard/organization");
      useNuxtApp().$toast.success("Organization was successfully created", {
        autoClose: 8000,
        dangerouslyHTMLString: true,
      });
      organizationList.value.push({
        id: generateUUID(),
        name: organizationPayload.value.name,
        description: organizationPayload.value.description,
        createdAt: generateCurrentDateISO(),
        website: organizationPayload.value.website,
        logo: "data:image/svg+xml;base64,Sl",
      });
      useRouter().push("/dashboard/organization");
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(
      organizationPayload.value.name &&
      organizationPayload.value.description &&
      organizationPayload.value.website &&
      organizationPayload.value.logo
    );
  });

  return {
    handleCreateOrganization,
    organizationPayload,
    loading,
    isFormEmpty,
  };
};
