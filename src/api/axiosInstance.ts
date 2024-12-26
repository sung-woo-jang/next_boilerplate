import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const createAxiosInstance = (
  contentType: string,
  baseURL: string = '/',
): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL,
    withCredentials: true,
    headers: {
      'Content-Type': contentType,
    },
  };

  return axios.create(config);
};

export const axiosInstance: AxiosInstance = createAxiosInstance(
  'application/json',
  '/api',
);
export const defaultInstance: AxiosInstance =
  createAxiosInstance('application/json');
export const formInstance: AxiosInstance = createAxiosInstance(
  'multipart/form-data',
);
