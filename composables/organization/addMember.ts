import { organizationApiFactory } from "@/apiFactory/organization";
import { useLogin } from '@/composables/auth/login'
const { id } = useLogin()
export const useAddOrganizationMember = () => {
  const loading = ref(false);
  const memberPayload = ref({
    userId: id,
    role: "",
  });

  const handleAddMember = async () => {
    const payload = {
      userId: memberPayload.value.userId,
      role: memberPayload.value.role,
    };
    loading.value = true;
    organizationApiFactory.createOrganizationMember(useRoute().params.id, payload)
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

  const isFormEmpty = computed(() => {
    return !!(memberPayload.value.role && memberPayload.value.userId);
  });

  return { handleAddMember, memberPayload, loading, isFormEmpty };
};
