import { AxiosRequestConfig } from 'axios';

/**
 * 默认 axios 配置
 */
export const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: '',
  timeout: 10000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
  },
};

export const getConfig = () => {
  return DEFAULT_CONFIG;
};
