import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/Landing-Rodri/" : "/",
  resolve: {
    alias: {
      "/main.tsx": path.resolve(__dirname, "src/main.tsx"),
    },
  },
  build: {
    outDir: "dist",
    // Asegúrate de que Vite use el index.html como entrada
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
