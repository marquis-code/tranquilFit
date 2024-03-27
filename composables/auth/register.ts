import { authApiFactory } from "@/apiFactory/auth";
import { useStorage } from "@vueuse/core";

const router = useRouter();
export const useRegister = () => {
  const loading = ref(false);
  const registerPayload = ref({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const payload = {
    firstName: registerPayload.value.firstName,
    lastName: registerPayload.value.lastName,
    email: registerPayload.value.email,
    password: registerPayload.value.password,
  };

  const handleRegister = async () => {
    loading.value = true;
    try {
      const response = await authApiFactory.register(payload);
      router.push("/login");
      useNuxtApp().$toast.success("Account was successfully created.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return response.data;
    } catch (error) {
      // useNuxtApp().$toast.error(error.message, {
      //   autoClose: 5000,
      //   dangerouslyHTMLString: true,
      // });
      return error;
    } finally {
      useNuxtApp().$toast.success("Account was successfully created.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      useStorage("user", payload), useRouter().push("/login");
      // router.push("/login");
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(
      registerPayload.value.firstName &&
      registerPayload.value.lastName &&
      registerPayload.value.email &&
      registerPayload.value.password
    );
  });

  return { registerPayload, handleRegister, loading, isFormEmpty };
};

// const notify = () => {
//   useNuxtApp().$toast.info('Hello World.\n I am <b>Tom</b>', {
//     autoClose: 5000,
//     dangerouslyHTMLString: true,
//   });
// };
