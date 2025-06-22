import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
 base: process.env.VITE_BASE_PATH || "/palmenter-web-one",, // اجعلها منها هكذا للنشر على Vercel
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [ //welcome/
    react(),
    // mode === 'development' &&
    // componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
