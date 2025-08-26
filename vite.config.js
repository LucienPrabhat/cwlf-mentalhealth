import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // 代理捐款API請求
      '/api/donate': {
        target: 'https://www.children.org.tw',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/donate/, '/donate'),
        headers: {
          'Origin': 'https://www.youtube.com',
          'Referer': 'https://www.youtube.com/'
        }
      }
    }
  }
});
