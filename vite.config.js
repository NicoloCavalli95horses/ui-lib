import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/main-lib.js'),
      name: 'lib',
      fileName: 'lib',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
})