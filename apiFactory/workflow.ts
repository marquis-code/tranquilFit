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
  updateWorkflowSteps(stepId: string, payload: any) {
    return axiosInstance.patch(`/step/${stepId}/fields`, payload);
  },
  createField(payload: {
    name: String;
    description: String;
    fieldType: String;
  }) {
    return axiosInstance.post("/field", payload);
  },
  createWorkflow(payload: {
    orgId: String;
    name: String;
    description: String;
  }) {
    return axiosInstance.post("/workflow", payload);
  },
  addStepToWorkflow(id: string, payload: any) {
    return axiosInstance.put(`/workflow/${id}/steps`, payload);
  },
  updateWorkflowStatus(id: string, payload: any) {
    return axiosInstance.patch(`/workflow/${id}`, payload);
  },
  updateWorkflowStep(id: string, payload: any) {
    return axiosInstance.patch(`/step/${id}`, payload);
  },
};
