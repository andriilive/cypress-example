import {UserConfig as ImageDiffHtmlReportPluginConfigOptions} from "cypress-image-diff-html-report/dist/common/types"
import type {RecurseDefaults} from "cypress-recurse";

/**
 * Check the config.default.js file for the default values
 * @see https://cypress.visual-image-diff.dev/getting-started/custom-config-file
 * @file node_modules/cypress-image-diff-js/dist/config.default.js
 */
type ImageDiffPluginConfigOptions = Partial<{
  ROOT_DIR: string | 'cypress' | '',
  REPORT_DIR: string | 'visual-test-report',
  SCREENSHOTS_DIR: string | 'screenshots',
  FAILURE_THRESHOLD: number | 0,
  RETRY_OPTIONS: Partial<typeof RecurseDefaults> | {},
  FAIL_ON_MISSING_BASELINE: boolean | false,
  COMPARISON_OPTIONS: {
    threshold: number | 0.1,
  },
  JSON_REPORT: {
    FILENAME: string | 'filename_without_extension',
    OVERWRITE: boolean,
  },
  CYPRESS_SCREENSHOT_OPTIONS: Cypress.ScreenshotOptions | {},
}>

export {
  type ImageDiffPluginConfigOptions,
  type ImageDiffHtmlReportPluginConfigOptions
}