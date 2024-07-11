import { authApiFactory } from "@/apiFactory/auth";

export const useRegister = () => {
  const loading = ref(false);
  const route = useRoute()
  const registerPayload = ref({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleRegister = async () => {
    loading.value = true;
    try {
      const payload = {
        firstName: registerPayload.value.fullName,
        email: registerPayload.value.email,
        phone: registerPayload.value.phone,
        password: registerPayload.value.password,
      };

      const response = await authApiFactory.register(payload);
      useNuxtApp().$toast.success("Account was successfully created.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      useRouter().push({ path: route.path, query: { type: "login" } });
    } catch (error) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      // return error;
    } finally {
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(
      registerPayload.value.fullName &&
      registerPayload.value.email &&
      registerPayload.value.phone &&
      registerPayload.value.password
    );
  });

  return { registerPayload, handleRegister, loading, isFormEmpty };
};
