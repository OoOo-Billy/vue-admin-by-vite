import http from '@/utils/http';

export const getMajors = () => {
  return http.request<MajorItem[]>({
    url: '/api/school/getMajors',
    method: 'get',
  });
};
