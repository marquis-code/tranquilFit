import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://doctrack.lordvidex.com/v1",
});

axiosInstance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token")
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
