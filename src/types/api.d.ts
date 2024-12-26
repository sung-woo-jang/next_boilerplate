export interface DynamicParams {
  [key: string]: string | string[] | number;
}

// 공통 응답 베이스 인터페이스
interface BaseResponse {
  success: boolean;
  status: 'success' | 'fail';
  httpStatus: number;
  timestamp: string;
}

interface Pagination {
  page: number;
  size: number;
  total: number;
}

// 성공 응답 인터페이스
export interface SuccessResponse<T> extends BaseResponse {
  success: boolean;
  status: 'success';
  data: {
    content: T;
  } & Partial<Pagination>;
}

// 실패 응답 인터페이스
export interface ErrorResponse extends BaseResponse {
  success: false;
  status: 'fail';
  messages: string[];
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
