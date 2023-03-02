import authServices from '@/core/domains/auth/auth.services';
import getDecodeToken from '@/core/utils/auth/getDecodeToken';
import { AxiosError, AxiosInterceptorManager, AxiosResponse } from 'axios';
import dayjs from 'dayjs';

export default function responseInterceptor(
  response: AxiosInterceptorManager<AxiosResponse>,
) {
  response.use(
    (config) => config,
    async (error: AxiosError) => {
      const router = window.location;

      if (error.response?.status !== 401) return Promise.reject(error);

      if (router.pathname === 'auth' || router.pathname === 'auth/refresh')
        return Promise.reject(error);

      const token = getDecodeToken();

      if (token) {
        const now = dayjs();
        const exp = dayjs.unix(token.exp);

        const minutesToExpire = exp.diff(now, 'minutes');

        console.log(minutesToExpire);

        if (!minutesToExpire || minutesToExpire < 10) {
          try {
            const result = await authServices.refresh();

            localStorage.setItem('token', result.token);

            return;
          } catch {
            return Promise.reject(error);
          }
        }
      }
    },
  );
}
