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
        https: true, // Esto solo aplica en desarrollo, pero debe estar asegurado
    },
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    pdfmake: ['pdfmake/build/pdfmake', 'pdfmake/build/vfs_fonts'],
                },
            },
        },
    },
    base: '/', // Eliminar cualquier base personalizada, esto ayuda a asegurar que los archivos se sirvan desde la raíz
});

