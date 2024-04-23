// https://cypress.visual-image-diff.dev/getting-started/custom-config-file
const CY_DIRNAMES = Cypress.env('CY_DIRNAMES')
const CY_ROOT = Cypress.env('CY_ROOT')

/** @type {import('@cy/types').ImageDiffPluginConfigOptions} */
const imageDiffConfig = {
  ROOT_DIR: CY_ROOT || '',
  SCREENSHOTS_DIR: CY_DIRNAMES.SCREENSHOTS || 'cypress-image-diff-screenshots',
  FAILURE_THRESHOLD: 0.99,
  REPORT_DIR: CY_DIRNAMES.REPORTS || 'cypress-image-diff-html-report',
  COMPARISON_OPTIONS: {
    threshold: 0.1
  }
}

module.exports = imageDiffConfig