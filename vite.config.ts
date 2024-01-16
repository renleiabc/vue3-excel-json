import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import viteCompression from 'vite-plugin-compression';

export default ({ mode, command }) => {
  console.log('🚀 ~ command:', command);
  console.log('🚀 ~ mode:', mode);
  return defineConfig({
    plugins: [
      vue(),
      dts(),
      viteCompression({
        verbose: true,
        disable: false, // 不禁用压缩
        deleteOriginFile: false, // 压缩后是否删除原文件
        threshold: 10240, // 压缩前最小文件大小
        algorithm: 'gzip', // 压缩算法
        ext: '.gz' // 文件类型
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: {
      minify: 'esbuild',
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, 'lib/main.ts'),
        name: 'vue3ExcelJson',
        fileName: (format) => `vue3-excel-json.${format}.js`
      },
      rollupOptions: {
        external: ['vue', 'xlsx'],
        output: {
          globals: {
            vue: 'Vue',
            xlsx: 'Xlsx'
          }
        }
      }
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    server: {
      host: '0.0.0.0',
      port: 3100,
      open: true,
      strictPort: true
    }
  });
};
