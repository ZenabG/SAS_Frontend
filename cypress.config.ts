import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
});
