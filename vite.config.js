import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["**/*.glsl", "**/*.wgsl"],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 0, // Don't inline assets, keep them as separate files
  },
});
