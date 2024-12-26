import { SuccessResponse } from '@/types/api';

export const isStorageDataValid = (
  cachedAt: number,
  duration: number
): boolean => {
  return Date.now() - cachedAt < duration;
};

interface StorageType<T> {
  content: T;
  cachedAt: number;
}

export const convertStorageToApiResponse = <T>(
  metadata: StorageType<T> | undefined,
  cacheDuration: number
): SuccessResponse<T> | undefined => {
  if (!metadata || !isStorageDataValid(metadata.cachedAt, cacheDuration))
    return undefined;
  return {
    success: true,
    status: 'success',
    httpStatus: 200,
    data: {
      content: metadata.content,
    },
    timestamp: new Date().toISOString(),
  };
};
