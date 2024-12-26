'use client';

import React, { useEffect } from 'react';
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { ApiResponse, ErrorResponse } from '@/types/api';
import {
  axiosInstance,
  defaultInstance,
  formInstance,
} from '@/api/axiosInstance';

interface Props {
  children: React.ReactNode;
}

export default function AxiosInterceptor({ children }: Props) {
  // 모든 인스턴스 배열
  const instances: AxiosInstance[] = [
    axiosInstance,
    defaultInstance,
    formInstance,
  ];
  useEffect(() => {
    // 각 인스턴스에 대한 interceptor 참조를 저장할 배열
    const interceptors = instances.map((instance) => {
      const responseInterceptor = instance.interceptors.response.use(
        (response: AxiosResponse<ApiResponse<unknown>>) => response,
        (error: AxiosError<ErrorResponse>) => {
          return Promise.reject(error);
        }
      );

      const requestInterceptor = instance.interceptors.request.use(
        (config) => config,
        (error) => {
          return Promise.reject(error);
        }
      );

      return {
        instance,
        interceptors: {
          request: requestInterceptor,
          response: responseInterceptor,
        },
      };
    });

    return () => {
      interceptors.forEach(
        ({ instance, interceptors: instanceInterceptors }) => {
          instance.interceptors.request.eject(instanceInterceptors.request);
          instance.interceptors.response.eject(instanceInterceptors.response);
        }
      );
    };
  }, []);

  return children;
}
