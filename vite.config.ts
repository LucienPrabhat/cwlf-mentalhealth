import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        '/option.svg',
        '/frame-90.svg',
        '/--0000@2x.png',
        '/rectangle-20.svg',
        '/frame-110.svg',
        '/frame-114.svg',
        '/frame-125.svg',
        '/frame-602.svg',
        '/frame-81.svg',
        '/3-1@2x.png',
        '/1-1@2x.png',
        '/02--1@2x.png',
        '/frame-47@2x.png',
        '/frame-48@2x.png',
        '/frame-50.svg',
        '/layer-271.svg',
        '/--0003-layer27-1@2x.png'
      ]
    }
  }
});
