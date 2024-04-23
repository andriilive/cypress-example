import {generate, startServer} from "cypress-image-diff-html-report/dist/core";

generate({
  inlineAssets: true,
  outputDir: 'cypress-image-diff-html-report',
  reportJsonDir: 'cypress/visual-test-report',
}).then(r => {
  console.log(r)

  startServer({
    reportJsonDir: 'cypress/visual-test-report',
    autoOpen: true,
  }).then(r => console.log(r));

});