import {download_file_path} from "@cy/utils";

// Autor's json file path in downloads folder, relative to the project root
const AUTHOR_JSON_FILE = download_file_path('author.json')

describe('author', () => {

  it('captures the authors page screenshot', () => {
    cy.go_home()
    // Take a snapshot for visual regression testing
    cy.screenshot('authors-homepage', {
      onAfterScreenshot: async ($el, props) => {
        cy.log(`saved screenshot to ${props.path}`)
        console.log({
          props,
          $el
        })
      },
      overwrite: true,
    })
  })

  it('download author.json', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.request(Cypress.env('AUTHOR').WEB_URL).then((response) => {
      cy.writeFile(AUTHOR_JSON_FILE, response.body)
    })
  })
})
