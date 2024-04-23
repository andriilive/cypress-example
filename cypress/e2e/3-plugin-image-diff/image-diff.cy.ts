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

  let id = 'main'

  beforeEach(() => {
    const url = versionURL(id)
    cy.visit(url)
  })

  it(`snap-diff-${id}`, () => {
    cy.viewport(1280, 720)
    cy.screenshot(`github-readme-${id}`, {
      overwrite: true,
      capture: 'viewport'
    })
  })

  it(`snap-diff-${id}-markdown`, {
    scrollBehavior: "center",
  }, () => {
    cy.get('article.markdown-body').compareSnapshot({
      name: `snap-diff-${id}-markdown`,
      exactName: true,
    })
  })

  // versions.forEach(({id, blob, options}) => {
  //
  //   beforeEach(() => {
  //     const url = versionURL(blob)
  //     cy.visit(url)
  //   })
  //
  //   it(`snap-diff-${id}`, () => {
  //     cy.viewport(1280, 720)
  //     cy.screenshot(`github-readme-${id}`, {
  //       overwrite: true,
  //     })
  //   })
  //
  //   it(`snap-diff-${id}-markdown`, () => {
  //     cy.get('article.markdown-body').within(
  //     (currentSubject) => {
  //       cy.wrap(currentSubject).compareSnapshot({
  //         name: 'github-readme-markdown',
  //         exactName: true,
  //       })
  //       }
  //     )
  //   })
  //
  // })
})