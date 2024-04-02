import { workflowApiFactory } from "@/apiFactory/workflow";

export const useFetchWorkflowSteps = () => {
  const loading = ref(false);
  const workflowSteps = ref([
    {
      id: 1,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Initial Application Submission",
      description:
        "Submit the initial application form along with required personal information.",
      type: "TYPE_FORM",
    },
    {
      id: 2,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Document Upload",
      description:
        "Upload necessary documents, including passport, photographs, and supporting documents.",
      type: "TYPE_FILE_UPLOAD",
    },
    {
      id: 3,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Payment of Visa Fee",
      description:
        "Pay the visa application fee through the designated payment gateway.",
      type: "TYPE_PAYMENT",
    },
    {
      id: 4,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Biometrics Submission",
      description:
        "Schedule and attend a biometrics appointment to provide fingerprints and photographs.",
      type: "TYPE_APPOINTMENT",
    },
    {
      id: 5,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Visa Interview Scheduling",
      description:
        "Schedule a visa interview at the nearest consulate or embassy.",
      type: "TYPE_APPOINTMENT",
    },
    {
      id: 6,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Interview Preparation",
      description:
        "Prepare for the visa interview by reviewing potential questions and gathering all necessary documents.",
      type: "TYPE_NONE",
    },
    {
      id: 7,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Visa Interview",
      description: "Attend the visa interview at the scheduled time and date.",
      type: "TYPE_INTERVIEW",
    },
    {
      id: 8,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Visa Processing",
      description:
        "Your application is being processed. Please wait for notification.",
      type: "TYPE_NONE",
    },
    {
      id: 9,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Visa Decision Notification",
      description:
        "Receive notification regarding the decision on your visa application.",
      type: "TYPE_NOTIFICATION",
    },
    {
      id: 10,
      isGlobal: true,
      workflow: 'visa',
      orgId: "",
      name: "Passport and Visa Collection",
      description:
        "Collect your passport and visa from the consulate, embassy, or through the mail, as instructed.",
      type: "TYPE_COLLECTION",
    },
  ]) as any;
  const fetchWorkflowSteps = async (id: string) => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflowSteps(id);
      workflowSteps.value = response.data;
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchWorkflowSteps, workflowSteps, loading };
};
