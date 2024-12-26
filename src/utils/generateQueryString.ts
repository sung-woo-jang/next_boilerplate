/**
 * URL 쿼리 스트링을 생성하는 유틸리티 함수
 * @param params - 쿼리 파라미터 객체
 * @returns 생성된 쿼리 스트링 ('?' 접두사 포함)
 * @example
 * createQueryString({ page: 1, tags: ['react', 'typescript'] })
 * // Returns: "?page=1&tags=react,typescript"
 */
const createQueryString = <T extends Record<string, any>>(
  params: T,
): string => {
  // 유효한 값만 필터링
  const validEntries = Object.entries(params).filter(
    ([_, value]) => value !== undefined && value !== null,
  );

  if (validEntries.length === 0) return '';

  const searchParams = new URLSearchParams();

  validEntries.forEach(([key, value]) => {
    const stringValue = Array.isArray(value) ? value.join(',') : String(value);
    searchParams.append(key, stringValue);
  });

  return `?${searchParams.toString()}`;
};

export default createQueryString;
