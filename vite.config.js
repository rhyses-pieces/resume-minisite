import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [],
    publicDir: 'public',
    build: {
        cssCodeSplit: false,
        minify: false,
        watch: true
    }
})