/**
 * Configuration for the `cypress-image-diff` plugin
 *
 * @see docs
 * https://cypress.visual-image-diff.dev/getting-started/custom-config-file
 *
 * @see typescript example
 * https://github.com/kien-ht/cypress-image-diff-html-report/tree/main/examples/typescript
 *
 * @type {import('@cy/types').ImageDiffPluginConfigOptions}
 **/

const config = {
  ROOT_DIR: 'cypress',
  SCREENSHOTS_DIR: 'screenshots',
  REPORT_DIR: 'visual-test-report',
  FAILURE_THRESHOLD: 0.5,
  COMPARISON_OPTIONS: {
    threshold: 0.1
  },
  CYPRESS_SCREENSHOT_OPTIONS: {
    disableTimersAndAnimations: true,
  }
}

module.exports = config