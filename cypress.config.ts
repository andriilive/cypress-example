import {defineConfig} from 'cypress'
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin'

export default defineConfig({
  experimentalWebKitSupport: true,
  e2e: {
    // Configure your E2E tests here
    specPattern: `cypress/e2e/{1,2,3,4,5,6,7,8,9,10}-*/*.{cy,spec}.{js,ts}`,
    setupNodeEvents: (on, config) => {
      return getCompareSnapshotsPlugin(on, config);
    }
  }
})