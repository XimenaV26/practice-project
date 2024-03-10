import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 8080,
  },
  resolve: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  },
});
