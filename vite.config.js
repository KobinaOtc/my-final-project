import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions:{
            main: 'src/index.html'
        }
    }
})