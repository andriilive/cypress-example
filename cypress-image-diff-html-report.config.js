import {defineConfig} from 'cypress-image-diff-html-report'

const CY_PATHS = Cypress.env('CY_PATHS')

/** @type {import('cypress-image-diff-html-report').defineConfig} */
export default defineConfig({
  reportJsonDir: CY_PATHS.IMG_DIFF_REPORTS_JSON || 'cypress-image-diff-html-report',
  outputDir: CY_PATHS.IMG_DIFF_HTML || 'cypress-image-diff-html-report'
})
