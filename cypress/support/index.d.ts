/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Visit author's website
     * @example cy.go_home()
     * @returns Chainable<AUTWindow>
     */
    go_home(): Chainable<AUTWindow>

    // advanced example fixing the types
    drag(options: any): void

    dismiss(options: any): void

    console(method: any): any
  }
}