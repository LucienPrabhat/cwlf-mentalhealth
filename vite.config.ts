import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: (id) => {
        // Skip all missing assets to allow build to complete
        return id.startsWith('/') && (id.endsWith('.svg') || id.endsWith('.png') || id.endsWith('.jpg'));
      }
    }
  }
});
