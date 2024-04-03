import { axiosInstance } from "./axios.config";

export const documentApiFactory = {
  createDocument(payload: {
    workflowId: String
  }) {
    return axiosInstance.post("/document", payload);
  },
  getDocumentsById(id: string) {
    return axiosInstance.get(`/document/${id}`);
  },
  getDocumentsList() {
    return axiosInstance.get("/document");
  },
};
