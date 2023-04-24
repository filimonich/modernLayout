import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "./../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "/index.html", // путь к главному HTML-файлу
        other: "./src/other/other.html", // путь к файлу other.html
      },
    },
  },
  publicDir: "./../public",
});
