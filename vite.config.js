import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        https: true,  // Fuerza el uso de HTTPS en el servidor de desarrollo
    },
    build: {
        sourcemap: false,  // Esto desactiva los sourcemaps en producción
        rollupOptions: {
            output: {
                manualChunks: {
                    // Separa pdfMake y vfs_fonts para que se empaqueten correctamente
                    pdfmake: ['pdfmake/build/pdfmake', 'pdfmake/build/vfs_fonts'],
                },
            },
        },
    },
});
