import axios from "axios";
const token = ref("");
export const axiosInstance = axios.create({
  baseURL: "http://lordvidex.com:8081/v1",
});

axiosInstance.interceptors.request.use((config: any) => {
  const token = "your_access_token"; // Fetch this token as per your auth flow
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    if (typeof error.response === "undefined") {
      console.log("kindly check your network connection");
    }

    if (error.response.status === 401) {
      console.log("Unauthorised ERROR");
    } else {
      console.log(error.response);
    }
  }
);
