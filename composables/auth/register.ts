import { authApiFactory } from "@/apiFactory/auth";

const router = useRouter()
export const useRegister = () => {
  const loading = ref(false);
  const registerPayload = ref({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    loading.value = true;
    try {
      const response = await authApiFactory.register(registerPayload);
      return response.data;
    } catch (error) {
      return error
    } finally {
      router.push("/login");
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(registerPayload.value.firstName && registerPayload.value.lastName && registerPayload.value.email && registerPayload.value.password);
  })

  return { registerPayload, handleRegister, loading, isFormEmpty };
};
