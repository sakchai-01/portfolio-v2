import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [
        topLevelAwait({
            promiseExportName: '__tla',
            promiseImportName: i => `__tla_${i}`
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                train: resolve(__dirname, 'train-simulation.html'),
                portfolio: resolve(__dirname, 'portfolio-v2/cv-portfolio.html'),
                map: resolve(__dirname, 'travel-map.html'),
                dustboy: resolve(__dirname, 'dustboy-3d.html'),
                blockchain: resolve(__dirname, 'blockchain-sensor.html'),
            }
        }
    },
    base: './' // ให้พาธเป็น relative เพื่อรองรับ GitHub Pages
});
