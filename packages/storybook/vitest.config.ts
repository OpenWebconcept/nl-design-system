import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Runs every story as a test in Chromium, including the axe-core checks of `@storybook/addon-a11y`.
// See https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
export default defineConfig({
  // Pre-bundle these up front, so Vite does not reload halfway through the first test run.
  optimizeDeps: {
    include: ['react/jsx-dev-runtime'],
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, 'config') })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }],
            provider: playwright({}),
          },
        },
      },
    ],
  },
});
