import {defineConfig} from 'cypress-image-diff-html-report'

export default defineConfig({
  reportJsonDir: 'visual-test-report',
  outputDir: 'cypress-image-diff-html-report'
})