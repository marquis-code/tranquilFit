import { axiosInstance } from './axios.config'

export const authApiFactory = {
  register(data: any) {
    return axiosInstance.post('/auth/register', data);
  },
  login(data: any) {
    return axiosInstance.post('/auth/login', data);
  },
  refresh(data: any) {
    return axiosInstance.post('/auth/refresh', data);
  }
};
