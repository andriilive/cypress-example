import {AUTHOR_JSON_URL} from "@cy/const";
import {download_file_path} from "@cy/utils/file_path";

// Autor's json file path in downloads folder, relative to the project root
const AUTHOR_JSON_FILE = download_file_path('author.json')

describe('author', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.go_home()
  })

  it('captures the authors page screenshot', () => {
    // Take a snapshot for visual regression testing
    cy.screenshot('authors-homepage', {
      overwrite: true,
    })
  })

  it('download author.json', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.request(AUTHOR_JSON_URL).then((response) => {
      cy.writeFile(AUTHOR_JSON_FILE, response.body)
    })
  })

  context('author.json', () => {
    it('has the author details', () => {
      cy.readFile(AUTHOR_JSON_FILE).then((author) => {
        expect(author).to.have.property('name')
        expect(author).to.have.property('github')
      })
    })
  })
})
