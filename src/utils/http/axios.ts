import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getConfig } from './config';

export default class EnclosureHttp {
  constructor() {
    this.initAxios(getConfig());
    this.initInterceptors();
  }

  private static instance: AxiosInstance;

  private initAxios(config: AxiosRequestConfig) {
    EnclosureHttp.instance = axios.create(config);
  }

  private initInterceptors() {
    // 请求拦截
    EnclosureHttp.instance.interceptors.request.use(
      (value: AxiosRequestConfig) => {
        return value;
      }
    );

    // 响应拦截
    EnclosureHttp.instance.interceptors.response.use(
      (value: AxiosResponse<ServerResponse>) => {
        const {
          data: { code, message },
        } = value;
        if (code !== 'SUCCESS') {
          const err: Partial<ServerResponse> = { code, message };
          return Promise.reject(err);
        } else {
          return value;
        }
      },
      _error => {
        const err: Partial<ServerResponse> = {
          code: 'FAIL',
          message: '网络错误，请稍后重试',
        };
        return Promise.reject(err);
      }
    );
  }

  public request<T = any>(options: AxiosRequestConfig) {
    return EnclosureHttp.instance
      .request<ServerResponse<T>>(options)
      .then(res => {
        const {
          data: { data },
        } = res;
        return data;
      })
      .catch((err: ServerResponse) => {
        const { code, message } = err;
        // TODO global toast error
        console.error(`${code}: ${message}`);
      });
  }

  public get<T = any>(options: AxiosRequestConfig) {
    this.request<T>({ ...options, method: 'get' });
  }

  public post<T = any>(options: AxiosRequestConfig) {
    this.request<T>({ ...options, method: 'post' });
  }
}
