import {defineConfig} from 'cypress'
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin'
import {author} from './package.json'

const CY_ROOT = 'cypress' as const

const CY_DIRNAMES = {
  SCREENSHOTS: 'screenshots',
  REPORTS: 'reports',
  DOWNLOADS: 'downloads',
} as const

const GENERATED_BASE_DIR = `${CY_ROOT}/generated` as const
const REPORTS_BASE_DIR = `${GENERATED_BASE_DIR}/${CY_DIRNAMES.REPORTS}` as const

export default defineConfig({
  experimentalWebKitSupport: true,
  env: {
    CY_ROOT,
    CY_DIRNAMES,
    CY_PATHS: {
      GENERATED_BASE_DIR,
      REPORTS_BASE_DIR,
      DOWNLOADS: `${GENERATED_BASE_DIR}/${CY_DIRNAMES.DOWNLOADS}`,
      SCREENSHOTS: `${GENERATED_BASE_DIR}/${CY_DIRNAMES.SCREENSHOTS}`,
      IMG_DIFF_REPORTS_JSON: `${REPORTS_BASE_DIR}/image-diff`,
      IMG_DIFF_HTML: `${GENERATED_BASE_DIR}/image-diff-html`,
    },
    AUTHOR: {
      NAME: author.name,
      EMAIL: author.email,
      WEB_URL: author.url,
      GITHUB_URL: 'https://github.com/andriilive'
    }
  },
  e2e: {
    // Configure your E2E tests here
    specPattern: `${CY_ROOT}/**/*.{cy,spec}.{js,ts}`,
    setupNodeEvents: (on, config) => {
      return getCompareSnapshotsPlugin(on, config);
    }
  }
})