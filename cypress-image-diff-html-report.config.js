import {defineConfig} from 'cypress-image-diff-html-report'

/*** @type {ImageDiffHtmlReportPluginConfigOptions} */
const config = {
  reportJsonDir: 'visual-test-report',
  outputDir: 'visual-test-report'
}

export default defineConfig(config)
