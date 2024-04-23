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
const versionURL = (version: string) => `https://example.cypress.io/${version}`

// Versions to snapshot
const versions: {
  name: string,
  url: string,
  options?: {
    [key: string]: any
  }
}[] = [
  {
    name: 'master',
    url: '',
  },
  {
    name: 'dev',
    url: '',
  },
]

describe('cypress-image-diff-js', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://andriilive.github.io')
  })
})