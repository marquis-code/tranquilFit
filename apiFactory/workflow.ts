import { axiosInstance } from "./axios.config";

export const workflowApiFactory = {
  // Workflow APIs
  getWorkflowsFields() {
    return axiosInstance.get("/field");
  },
  getWorkflowSteps(id: string) {
    return axiosInstance.get(`workflow/${id}/steps`);
  },
  getWorkflowsById(id: string) {
    return axiosInstance.get(`/workflow/${id}`);
  },
  getWorkflows() {
    return axiosInstance.get("/workflow");
  },
  updateWorkflowSteps(stepId: string, paylaod: any) {
    return axiosInstance.patch(`step/${stepId}/fields`, paylaod);
  },
  createField(payload: {
    name: String;
    description: String;
    fieldType: String;
  }) {
    return axiosInstance.post("/field", payload);
  },
};
