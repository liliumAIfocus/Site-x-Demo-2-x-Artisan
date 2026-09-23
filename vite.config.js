import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Port 5174 : permet de lancer ce design en même temps que le 1er (5173).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
  },
});
