import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { viteMockServe } from 'vite-plugin-mock';

const alias: Record<string, string> = {
  '@': path.resolve(__dirname, '.', 'src'),
  '~': path.resolve(__dirname, '.', 'node_modules'),
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteMockServe({
      mockPath: 'mock',
      supportTs: true,
      ignore: new RegExp('.(?:d.ts|json)$'),
      watchFiles: true,
      // ignoreFiles: string[],
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      logger: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/var.scss";`,
      },
    },
  },
});
