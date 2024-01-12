import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default ({ mode, command }) => {
  console.log('🚀 ~ command:', command);
  console.log('🚀 ~ mode:', mode);
  return defineConfig({
    plugins: [vue()],
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
