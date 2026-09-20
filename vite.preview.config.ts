import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Standalone build of the Internor landing for sharing a preview link. */
export default defineConfig({
  plugins: [react()],
  root: 'preview',
  base: './',
  publicDir: '../public',
  build: { outDir: '../dist-preview', emptyOutDir: true },
});
