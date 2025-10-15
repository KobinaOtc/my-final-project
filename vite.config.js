import { defineConfig } from "vite";

export default defineConfig({
    base: '/my-final-project/',
    build: {
        rollupOptions:{
            main: '/index.html'
        }
    }
})