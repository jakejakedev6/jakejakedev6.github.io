import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This is a GitHub user site, so it is published at the domain root.
  base: '/',
  plugins: [react()],
});
