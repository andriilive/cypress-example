import {defineConfig} from 'cypress'

export default defineConfig({
  experimentalWebKitSupport: true,
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  }
})