import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "color-primary": "#67a183",
          "color-success": "#78cda2",
          "color-warning": "#a1d2b9",
          "color-info": "#a1d2b9",
          "color-text": "#070707",
          "color-bg-layout": "#f4f7f5",
          "border-radius-base": "6px",
        },
        javascriptEnabled: true,
      },
    },
  },
});
