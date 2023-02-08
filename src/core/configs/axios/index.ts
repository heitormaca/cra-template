import axios from 'axios';
import axiosInterceptors from './interceptors';

export const GITHUB_BASE_URL = process.env.REACT_APP_GITHUB_URL;

export const SERVICE_BASE_URL = process.env.REACT_APP_API_URL;

export const githubAxiosInstance = axios.create({ baseURL: GITHUB_BASE_URL });

export const axiosInstance = axios.create({
  baseURL: SERVICE_BASE_URL,
});

axiosInterceptors(axiosInstance);
