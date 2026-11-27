import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Vite 8 no longer compiles JSX for the automatic runtime by itself, so the tests need the React plugin as well.
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
    },
    css: true,
    environment: 'jsdom',
  },
});
