import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3001,
    open: true,
    proxy: {
      // 跨域代理
      '/posts': {
        // target: 'http://' + env.VUE_APP_BASE_API,
        target: 'http://localhost:5000/posts/', //
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/posts/, ''),
      },
      // 代理 WebSocket 或 socket
      // '/socket.io': {
      //   target: 'ws://localhost:3000',
      //   ws: true
      //  }
    },
  },
});
