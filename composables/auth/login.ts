// composables/useOrganizations.ts
import { authApiFactory } from "@/apiFactory/auth";

const router = useRouter();
const loginPayload = ref({
  email: "",
  password: "",
});
export const useLogin = () => {
  const loading = ref(false);
  const handleLogin = async () => {
    loading.value = true;
    try {
      const response = await authApiFactory.login(loginPayload);
      return response.data;
    } catch (error) {
      return error;
    } finally {
      router.push("/dashboard");
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(loginPayload.value.email && loginPayload.value.password);
  });

  return { handleLogin, loginPayload, loading, isFormEmpty };
};
