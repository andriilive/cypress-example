import {download_file_path} from "@cy/utils";
import {author} from "~/package.json";

// Autor's json file path in downloads folder, relative to the project root
const AUTHOR_JSON_FILE = download_file_path('author.json')

describe('author', () => {

  it('captures the authors page screenshot', () => {
    cy.go_home()
    cy.get('.position-sticky .Layout').invoke('css', 'opacity', 0)
    cy.screenshot('authors-github', {
      onAfterScreenshot($el, props) {}
    })
  })

  it('download author.json', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.request(author.url).then((response) => {
      cy.writeFile(AUTHOR_JSON_FILE, response.body)
    })
  })
})
