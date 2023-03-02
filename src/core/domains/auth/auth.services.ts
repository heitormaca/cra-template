import { axiosInstance } from '@/core/configs/axios';
import { AuthRequestParams, AuthResponse } from './auth.types';

const URL_CONTROLLER = `/auth`;

export default {
  async access(data: AuthRequestParams) {
    const result = await axiosInstance.post<AuthResponse>(
      `${URL_CONTROLLER}`,
      data,
    );

    return result.data;
  },

  async refresh() {
    const result = await axiosInstance.post<AuthResponse>(
      `${URL_CONTROLLER}/refresh`,
    );

    return result.data;
  },
};
