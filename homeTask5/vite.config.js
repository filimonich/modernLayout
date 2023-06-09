import { defineConfig } from "vite";

export default defineConfig({
	root: './src',
	build: {
		outDir: './../dist',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: '/index.html',
				other: '/pages/other.html'
			}
		}
	},
	publicDir: './../public',
	plugins: []
});	