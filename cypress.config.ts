import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    specPattern: 'src/tests/E2ETests/cypress/e2e/tests/*.{js,jsx,ts,tsx}',
    supportFile: false
  },
});
