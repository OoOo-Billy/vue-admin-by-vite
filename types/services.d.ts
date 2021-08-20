interface ServerResponse<T = any> {
  code: string;
  data: T;
  message: string;
}
