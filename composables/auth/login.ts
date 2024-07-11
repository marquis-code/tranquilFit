// composables/useOrganizations.ts
import { authApiFactory } from "@/apiFactory/auth";
import { useStorage } from "@vueuse/core";
import Swal from "sweetalert2";
const runtimeData = {
  user: ref({} as any),
  token: ref(""),
};
const localstorageDate = {
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
  runtimeData.user.value = localstorageDate.user.value;
  runtimeData.token.value = localstorageDate.token.value;
})();

const loginPayload = ref({
  email: "",
  password: "",
});
export const useLogin = () => {
  const loading = ref(false);
  const handleLogin = async () => {
    loading.value = true;
    try {
      const payload = {
        email: loginPayload.value.email,
        password: loginPayload.value.password,
      };
      const response = await authApiFactory.login(payload);
      runtimeData.user.value = response.data.user;
      localstorageDate.token.value = response.data?.token;
      runtimeData.token.value = response.data?.token;
      useNuxtApp().$toast.success("Welcome back.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      useRouter().push({ path: "/assessment" });
      return response.data;
    } catch (error) {
      useNuxtApp().$toast.error("Something went wrong!", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      useRouter().push({ path: "/assessment" });
      return error;
    } finally {
      loading.value = false;
    }
  };

  const logOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
      cancelButtonText: "Nah,Just Kidding!",
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        runtimeData.user.value = null;
        location.href = "/auth";
      } else {
        Swal.fire("Cancelled", "Action was cancelled", "info");
      }
    });
  };

  const id = computed({
    get: () => runtimeData?.user?.value?.id ?? "",
    set: () => {},
  });

  const isLoggedIn = computed({
    get: () => {
      if (!runtimeData.token?.value) return false;
      return runtimeData?.user?.value != null || undefined || {};
    },
    set: () => {},
  });

  const userRole = computed({
    get: () => {
      if (!runtimeData.token?.value) return false;
      return runtimeData?.user?.value != null || undefined || {}
        ? runtimeData?.user?.value.role
        : "";
    },
    set: () => {},
  });

  const user = computed({
    get: () => {
      if (!runtimeData.token?.value) return false;
      return runtimeData?.user?.value != null || undefined || {}
        ? runtimeData?.user?.value
        : "";
    },
    set: () => {},
  });
  const isFormEmpty = computed(() => {
    return !!(loginPayload.value.email && loginPayload.value.password);
  });

  return {
    handleLogin,
    localstorageDate,
    loginPayload,
    loading,
    isFormEmpty,
    logOut,
    isLoggedIn,
    id,
    userRole,
    user,
  };
};
