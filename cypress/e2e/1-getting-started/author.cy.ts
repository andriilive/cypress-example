import {download_file_path} from "@cy/utils";
import {author} from "~/package.json";

// Autor's json file path in downloads folder, relative to the project root
const AUTHOR_JSON_FILE = download_file_path('author.json')

describe('author', () => {

  it('captures the authors page screenshot', () => {
    cy.go_home()
    // Take a snapshot for visual regression testing
    cy.screenshot('authors-github-readme')
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
