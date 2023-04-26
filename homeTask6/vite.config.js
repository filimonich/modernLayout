import injectHTML from "vite-plugin-html-inject";

export default {
  root: "./src",
  publicDir: "./../public",
  build: {
    outDir: "./../docs",
    emptyOutDir: true,
  },
  plugins: [injectHTML()],
};
