import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/sound-cyber-cafe/',
  output: 'static',
  site: 'https://sound-cyber-cafe.example',
  build: { format: 'directory' },
});