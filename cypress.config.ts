import {defineConfig} from "cypress"
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/dist/plugin'

export default defineConfig({
  experimentalWebKitSupport: true,
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    setupNodeEvents: (on, config) => {
      return getCompareSnapshotsPlugin(on, config);
    }
  }
})