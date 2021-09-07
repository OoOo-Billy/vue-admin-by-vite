// -------------------- Response Types -------------------- //
interface ServerResponse<T = any> {
  code: string;
  data: T;
  message: string;
}

interface PaginationResponse<T = any> {
  list: T[];
  currentPage: number;
  pageSize: number;
  total: number;
}

interface LoginResponse {
  nickname: string;
  authority: string;
  id: string;
}

interface MajorItem {
  majorCode: string;
  majorName: string;
}

interface Student {
  name: string;
  gender: string;
  major: string;
  studentClass: string;
  score: number;
}

// -------------------- Request Types -------------------- //
interface Pagination {
  pagination: { page: number; pageSize: number };
}

interface LoginParams {
  id: string;
  pwd: string;
}

interface GetStudentParams extends Pagination {
  student: string;
  gender: string;
  major: string;
  studentClass: string;
  score: string;
}
