// composables/useOrganizations.ts
import { authApiFactory } from "@/apiFactory/auth";
import { useStorage } from "@vueuse/core";
const runtimeData = {
  auth: ref(),
  user: ref({} as any),
  token: ref(""),
};
const localstorageDate = {
  auth: ref(),
  user: useStorage("user", {} as any),
  token: useStorage("token", ""),
};
watch(
  runtimeData.user,
  (val) => {
    Object.keys(val).forEach((key) => {
      localstorageDate.user.value[key] = val[key];
    });
  },
  { deep: true }
);

(() => {
  runtimeData.auth.value = localstorageDate.auth.value;
  runtimeData.user.value = localstorageDate.user.value;
  runtimeData.token.value = localstorageDate.token.value;
})();
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
      runtimeData.user.value = response.data.user;
      localstorageDate.token.value = response.data?.token;
      runtimeData.token.value = response.data?.token;
      router.push("/dashboard");
      return response.data;
    } catch (error) {
      return error;
    } finally {
      useNuxtApp().$toast.success('Login was successful.', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      useRouter().push('/dashboard')
      loading.value = false;
    }
  };

  const logOut = () => {
    localStorage.clear();
    runtimeData.user.value = null;
    location.href = "/auth/login";
  };

  const id = computed({
    get: () => runtimeData?.auth?.value?.id ?? "",
    set: () => {},
  });

  const isLoggedIn = computed({
    get: () => {
      if (!runtimeData.token?.value) return false;
      return runtimeData?.user?.value != null || undefined || {};
    },
    set: () => {},
  });

  const isFormEmpty = computed(() => {
    return !!(loginPayload.value.email && loginPayload.value.password);
  });

  return {
    handleLogin,
    loginPayload,
    loading,
    isFormEmpty,
    logOut,
    isLoggedIn,
    id,
  };
};
