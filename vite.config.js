import commonjs from "@rollup/plugin-commonjs";
import livereload from 'rollup-plugin-livereload'
import resolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [  ],
    server: {
        open: true,
        watch: {
            usePolling: true,
            depth: 5,
            verbose: false,
        }
    },
    build: {
        // commonjsOptions: {
        //     exclude: ['node_modules/marked/**/**']
        // },
        cssCodeSplit: false,
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: [ './src/scripts/main.js', './index.html' ],
            output: {
                assetFileNames: 'assets/[name].[ext]',
                chunkFileNames: 'assets/[name].js',
                entryFileNames: 'assets/[name].js',
            },
            plugins: [
                commonjs(),
                livereload('dist/index.html'),
                resolve()
            ]
        },
    }
})
