import { exec } from "child_process";

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

  // beforeEach(() => {
  //   cy.visit(versionURL('main'))
  //   cy.get('#repos-sticky-header').hideElement()
  //   cy.get('article.markdown-body').compareSnapshot(`snap-diff-${id}-markdown`)
  // })

  // it(`snap-diff-${id}-markdown`, {
  //   scrollBehavior: "center",
  // }, () => {
  //   cy.visit(versionURL('main'))
  //   cy.get('#repos-sticky-header').hideElement()
  //   cy.get('article.markdown-body').compareSnapshot(`snap-diff-${id}-markdown`)
  // })

  versions.forEach(({id, blob, options}) => {

    let name_id = `snap-diff-${id}-markdown`

    // Create a baseline snapshot, to compare with the comparison snapshot
    it(`snap-diff-${id}-markdown:baseline`, {
      scrollBehavior: "center",
    }, () => {
      cy.visit(versionURL('main'))
      cy.get('#repos-sticky-header').hideElement()
      cy.get('article.markdown-body').compareSnapshot(`snap-diff-${id}-markdown`)
    })

    // Create a comparison snapshot, to compare with the baseline snapshot
    it(`snap-diff-${id}-markdown:comparison`, {
      scrollBehavior: "center",
    }, () => {
      cy.visit(versionURL(blob))
      cy.get('#repos-sticky-header').hideElement()
      cy.get('article.markdown-body').compareSnapshot(`snap-diff-${id}-markdown`)
    })

  })

  it('run-image-diff', () => {
    // npm script: "cypress:open": "cypress open"
    // npm script: "cypress:run": "cypress run"

    cy.exec('npm run diff:generate', {
      log: true,
      timeout: 60000,
    }).then((result) => {
      console.log(result.stdout);
    });

  })

})