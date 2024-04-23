// ***********************************************
// This example shows how to compare snapshots of the page using the cypress-image-snapshot plugin.
// Read the plugin documentation:
// https://github.com/uktrade/cypress-image-diff
//
// See typescript example:
// https://github.com/kien-ht/cypress-image-diff-html-report/tree/main/examples/typescript
// ***********************************************
//

// URL to snapshot
// main: https://github.com/andriilive/andriilive/blob/main/README.md
// dev: https://github.com/andriilive/andriilive/blob/33986d42333385341ccf331626156db827c92c9e/README.md
const versionURL = (blob: string = 'main') => `https://github.com/andriilive/andriilive/blob/${blob}/README.md`

// Versions to snapshot
const versions: {
  id: string,
  blob: string,
  options?: {
    [key: string]: any
  }
}[] = [
  {
    id: 'main',
    blob: 'main'
  },
  {
    id: 'dev',
    blob: '33986d42333385341ccf331626156db827c92c9e',
  },
]

describe('cypress-image-diff-js', () => {

  versions.map(({id, blob, options}) => {

    beforeEach(() => {
      const url = versionURL(blob)
      cy.visit(url)
    })

    it(`snap-diff-${id}-markdown`, {
      scrollBehavior: "center",
    }, () => {
      cy.get('#repos-sticky-header').hideElement()
      cy.get('article.markdown-body').compareSnapshot({
        name: 'snap-diff-readme-markdown',
        exactName: true,
        cypressScreenshotOptions: {
          capture: "fullPage"
        }
      })
    })


  })

})