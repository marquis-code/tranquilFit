import { axiosInstance } from './axios.config'

export const authApiFactory = {
  register(data: any) {
    return axiosInstance.post('/register', data);
  },
  login(data: any) {
    return axiosInstance.post('/login', data);
  },
  refresh(data: any) {
    return axiosInstance.post('/refresh', data);
  }
};
