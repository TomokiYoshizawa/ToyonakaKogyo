import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/toyonakaKogyo/", // デプロイ先のパスに合わせて変更
  plugins: [react()],
});
