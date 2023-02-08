import { AxiosInstance } from 'axios';
import requestInterceptor from './request';
import responseInterceptor from './response';
import successInterceptor from './success';

export default function axiosInterceptors(instance: AxiosInstance) {
  requestInterceptor(instance.interceptors.request);
  responseInterceptor(instance.interceptors.response);
  successInterceptor(instance.interceptors.response);
}
