import { axiosInstance, SERVICE_BASE_URL } from '@/core/configs/axios';
import { AuthRequestParams, AuthResponse } from './auth.types';

const URL_CONTROLLER = `${SERVICE_BASE_URL}`;

export default {
  async access(data: AuthRequestParams) {
    const result = await axiosInstance.post<AuthResponse>(
      `${URL_CONTROLLER}/auth`,
      data,
    );

    return result.data;
  },

  async refresh() {
    const result = await axiosInstance.post<AuthResponse>(
      `${URL_CONTROLLER}/auth/refresh`,
    );

    return result.data;
  },
};
