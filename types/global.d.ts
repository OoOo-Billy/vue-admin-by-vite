import type { App } from 'vue';

declare global {
  type SFCWithInstall<T> = T & { install(app: App): void };
}
