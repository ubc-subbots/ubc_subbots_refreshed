import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import postcssNested from 'postcss-nested';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  css: {
    postcss: {
      plugins: [
        postcssNested(),
      ],
    },
  },
});