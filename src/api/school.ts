import http from '@/utils/http';

export const getMajors = () => {
  return http.request<MajorItem[]>({
    url: '/api/school/getMajors',
    method: 'get',
  });
};

export const getStudents = (data: GetStudentParams) => {
  return http.request<PaginationResponse<Student>>({
    url: '/api/school/getStudent',
    method: 'post',
    data,
  });
};
