import { workflowApiFactory } from "@/apiFactory/workflow";
import { useLogin } from '@/composables/auth/login'
import { useStorage } from "@vueuse/core";
const workflowList = ref([]) as any;
const { user } = useLogin()

useStorage("workflows", { workflowList });
export const useFetchWorkflows = () => {
  const loading = ref(false);
  const fetchWorkflows = async () => {
    
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflows(user.value.orgId);
      workflowList.value = response.data.workflows ?? [];
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchWorkflows, workflowList, loading };
};
