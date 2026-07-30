import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL,
  build: {
    format: "directory",
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
});
