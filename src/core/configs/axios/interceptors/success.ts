import { AxiosInterceptorManager, AxiosResponse } from 'axios';

export default function successInterceptor(
  response: AxiosInterceptorManager<AxiosResponse>,
) {
  return response;
}
