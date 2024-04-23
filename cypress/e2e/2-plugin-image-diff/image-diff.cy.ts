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
  id: string, blob: string, options?: {
    [key: string]: any
  }
}[] = [
  {
    id: 'prev', blob: '33986d42333385341ccf331626156db827c92c9e',
  },
  {
    id: 'old', blob: 'ef9fab87acdc20ef113f4a52e75eb769da3d5ecd'
  }
]

describe('cypress-image-diff-js', () => {

  versions.forEach(({id, blob, options}) => {

    const name_id = `snap-diff-${id}-markdown`

    beforeEach(() => {
      cy.visit(versionURL('main'))
      cy.get('#repos-sticky-header').hideElement()
      cy.get('article.markdown-body').compareSnapshot(name_id)
    })

    it(name_id, {
      scrollBehavior: "center",
    }, () => {
      cy.visit(versionURL(blob))
      cy.get('#repos-sticky-header').hideElement()
      cy.get('article.markdown-body').compareSnapshot(name_id)
    })


  })

})