import type { App, defineEmits } from 'vue';

declare global {
  type SFCWithInstall<T> = T & { install(app: App): void };
}

declare module 'vite-plugin-mock' {
  export interface MockMethod {
    response?:
      | ((opt: {
          url: Record<string, any>;
          body: Record<string, any>;
          query: Record<string, any>;
          headers: Record<string, any>;
        }) => ServerResponse)
      | any;
  }
}
