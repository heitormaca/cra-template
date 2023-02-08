import { AxiosError, AxiosInterceptorManager, AxiosResponse } from 'axios';

export default function responseInterceptor(
  response: AxiosInterceptorManager<AxiosResponse>,
) {
  response.use(
    (config) => config,
    (error: AxiosError) => {
      // TODO

      // if 401 and not login request and i have the old token

      // ao invez de verificar direto o local storage, pegar direto da instancia o objeto de auth

      // do refresh token and replace the new token in localstorage

      return Promise.reject(error);
    },
  );
}
