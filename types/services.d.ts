// -------------------- Response Types -------------------- //
interface ServerResponse<T = any> {
  code: string;
  data: T;
  message: string;
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

// -------------------- Request Types -------------------- //
interface LoginParams {
  id: string;
  pwd: string;
}
