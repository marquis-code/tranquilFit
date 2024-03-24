import { organizationApiFactory } from "@/apiFactory/organization";

export const useFetchEngagementSummary = () => {
  const loading = ref(false);
  const engagementSummaryList  = ref([]) as any
  const fetchEngagementSummary = async () => {
    loading.value = true;
    try {
      const response = await organizationApiFactory.getEngagementSummary();
      engagementSummaryList.value = response.data
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchEngagementSummary, engagementSummaryList, loading };
};
