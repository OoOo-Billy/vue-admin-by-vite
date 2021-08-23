import http from '@/utils/http';

export const login = (data: LoginParams) => {
  return http.request<LoginResponse>({
    url: '/api/account/login',
    method: 'post',
    data,
  });
};

export const logout = () => {
  return http.request({
    url: '/api/account/logout',
    method: 'get',
  });
};
