import { workflowApiFactory } from "@/apiFactory/workflow";
import { useStorage } from "@vueuse/core";
import { generateUUID } from "@/utils/generateUUID";
import { generateCurrentDateISO } from '@/utils/generateDate';

const workflowList = ref([
  {
    organizationId: "BANK001",
    createdBy: "Daniel Nelson",
    workflowName: "New Account Opening",
    id: "3573cda2-0dcb-4d4a-b53e-820dfee5495e",
    createdAt: generateCurrentDateISO,
    workflowDescription:
      "A process for opening new accounts for customers efficiently and securely.",
    workflowSteps: "4 steps",
    steps: [
      {
        title: "Gathering Information",
        description:
          "Collect personal, employment, and financial information from the customer.",
      },
      {
        title: "Verification",
        description:
          "Verify the customer's identity and financial history through internal and external checks.",
      },
      {
        title: "Account Setup",
        description:
          "Create the customer's account in the banking system and set up necessary features as requested.",
      },
      {
        title: "Welcome Kit",
        description:
          "Send out a welcome kit including account details, debit cards, and informational brochures.",
      },
    ],
  },
  {
    organizationId: "BANK002",
    createdBy: "Caleb Jones",
    createdAt: generateCurrentDateISO,
    workflowName: "Mortgage Application",
    id: "1c763bfb-120c-470d-95a0-7beca184ea11",
    workflowDescription:
      "Workflow for processing mortgage applications from initial submission to final approval.",
    workflowSteps: "5 steps",
    steps: [
      {
        title: "Application Submission",
        description:
          "Receive and log the mortgage application along with required documents from the applicant.",
      },
      {
        title: "Initial Review",
        description:
          "Conduct an initial review of the application and documents for completeness and basic eligibility.",
      },
      {
        title: "Financial Assessment",
        description:
          "Perform a detailed financial assessment of the applicant, including credit check and income verification.",
      },
      {
        title: "Property Appraisal",
        description:
          "Order a property appraisal to confirm the market value of the property being mortgaged.",
      },
      {
        title: "Final Approval",
        description:
          "Final review and decision by the loan approval committee, followed by notification to the applicant.",
      },
    ],
  },
  {
    organizationId: "BANK003",
    createdBy: "Judith Kelly",
    createdAt: generateCurrentDateISO,
    workflowName: "Wire Transfer",
    id: "8ba1cf66-4169-408c-b0de-555f2ec69f1a",
    workflowDescription:
      "Process for executing wire transfers, ensuring compliance and security.",
    workflowSteps: "4 steps",
    steps: [
      {
        title: "Transfer Request",
        description:
          "Receive wire transfer request from customer, including beneficiary details and amount.",
      },
      {
        title: "Verification and Compliance Check",
        description:
          "Verify customer identity and perform compliance checks against money laundering regulations.",
      },
      {
        title: "Execution",
        description:
          "Execute the wire transfer through the banking network to the beneficiary's account.",
      },
      {
        title: "Confirmation",
        description:
          "Send a confirmation to the customer that the transfer has been completed.",
      },
    ],
  },
  {
    organizationId: "BANK004",
    createdBy: "Fred Almond",
    workflowName: "Credit Card Application",
    createdAt: generateCurrentDateISO,
    id: 'd8f3d8a6-40b6-4091-a616-004aad524364',
    workflowDescription:
      "A comprehensive process for handling credit card applications from customers.",
    workflowSteps: "5 steps",
    steps: [
      {
        title: "Application Receipt",
        description:
          "Collect credit card application form along with necessary personal and financial documents.",
      },
      {
        title: "Eligibility Check",
        description:
          "Check the eligibility of the applicant based on the bank's criteria and credit scoring.",
      },
      {
        title: "Credit Evaluation",
        description:
          "Evaluate the credit history and score of the applicant to determine credit limit and terms.",
      },
      {
        title: "Card Creation",
        description:
          "Create the credit card account and generate the physical card with security features.",
      },
      {
        title: "Dispatch and Activation",
        description:
          "Dispatch the credit card to the customer and guide them through the activation process.",
      },
    ],
  },
]) as any;

useStorage("workflows", { workflowList });
export const useFetchWorkflows = () => {
  const loading = ref(false);
  const fetchWorkflows = async () => {
    loading.value = true;
    try {
      const response = await workflowApiFactory.getWorkflows();
      workflowList.value = response.data;
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchWorkflows, workflowList, loading };
};
