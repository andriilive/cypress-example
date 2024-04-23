import type {RecurseDefaults} from "cypress-recurse";

/**
 * Check the config.default.js file for the default values
 * @file node_modules/cypress-image-diff-js/dist/config.default.js
 */
export type ImageDiffPluginConfigOptions = Partial<{
  ROOT_DIR: string,
  REPORT_DIR: string,
  SCREENSHOTS_DIR: string,
  FAILURE_THRESHOLD: number | 0,
  RETRY_OPTIONS: Partial<typeof RecurseDefaults> | {},
  FAIL_ON_MISSING_BASELINE: boolean | false,
  COMPARISON_OPTIONS: {
    threshold: number | 0.1,
  },
  JSON_REPORT: {
    FILENAME: string | '',
    OVERWRITE: boolean | true,
  },
  CYPRESS_SCREENSHOT_OPTIONS: Cypress.ScreenshotOptions | {}
}>