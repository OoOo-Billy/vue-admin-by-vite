import type { App, defineEmits } from 'vue';

declare global {
  type SFCWithInstall<T> = T & { install(app: App): void };

  /* FIXME
   * vue@3.2.1 虽然在 runtime-core.d.ts 中提供了 defineEmits 类型，
   * 但 script-setup 中仍然只能使用 defineEmit ，为了防止 ts 报错，故在此补充
   * 待 script-setup 统一变量名并进入 stage 后，此补充类型定义可删除
   */
  const defineEmit: typeof defineEmits;
}
