'use client';
import { axiosInstance } from './axiosInstance';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

function AxiosInterceptor({ children }: Props) {
  useEffect(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,

      (error) => Promise.reject(error)
    );

    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return children;
}

export { AxiosInterceptor };
