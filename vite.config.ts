import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import vueJsx from '@vitejs/plugin-vue-jsx';
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
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
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
