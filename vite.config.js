import livereload from 'rollup-plugin-livereload'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        open: true,
        watch: {
            usePolling: true,
            depth: 5,
        }
    },
    build: {
        cssCodeSplit: false,
        emptyOutDir: false,
        minify: 'esbuild',
        rollupOptions: {
            input: [ './src/scripts/main.js', './index.html' ],
            output: {
                assetFileNames: 'assets/[name].[ext]',
                chunkFileNames: 'assets/[name].js',
                entryFileNames: 'assets/[name].js',
            },
            plugins: [
                livereload({ watch: 'dist', port: 12345, })
            ]
        },
    }
})