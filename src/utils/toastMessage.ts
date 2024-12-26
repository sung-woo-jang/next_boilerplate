export const TOAST_MESSAGES = {
  // 공통 에러 메시지
  COMMON: {
    UNKNOWN_ERROR: '알 수 없는 에러가 발생했습니다.',
    NETWORK_ERROR: '서버와의 통신 중 문제가 발생했습니다.',
    REQUEST_ERROR: '요청 처리 중 문제가 발생했습니다.',
    SESSION_ERROR: '세션이 만료되었습니다. 다시 로그인해주세요.',
  },

  AUTH: {
    LOGIN: {
      SUCCESS: '로그인에 성공했습니다.',
      ERROR: '아이디 또는 비밀번호가 올바르지 않습니다.',
    },
    LOGOUT: {
      SUCCESS: '로그아웃 되었습니다.',
      ERROR: '로그아웃 처리 중 오류가 발생했습니다.',
    },
    SESSION: {
      SUCCESS: '인증이 확인되었습니다.',
      ERROR: '인증 확인에 실패했습니다.',
    },
  },
} as const;

// 타입 정의
export type DomainKey = keyof typeof TOAST_MESSAGES;
export type HttpMethodKey<D extends DomainKey> =
  keyof (typeof TOAST_MESSAGES)[D];
export type MessageType = 'SUCCESS' | 'ERROR';

// 타입 안전한 메시지 접근을 위한 유틸리티 함수
export const getToastMessage = (
  domain: Exclude<DomainKey, 'COMMON'>,
  method: HttpMethodKey<typeof domain>,
  type: MessageType,
): string => {
  return TOAST_MESSAGES[domain][method][type];
};

// 공통 에러 메시지 접근을 위한 유틸리티 함수
export const getCommonErrorMessage = (
  key: keyof typeof TOAST_MESSAGES.COMMON,
): string => {
  return TOAST_MESSAGES.COMMON[key];
};
