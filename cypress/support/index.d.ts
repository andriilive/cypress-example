// TS2669: Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.
// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Visit author's website
       * @example cy.go_home()
       * @returns Chainable<AUTWindow>
       */
      go_home(): Chainable<AUTWindow>

      // Overwrite an existing commands

      /**
       * Visit author's website
       * @example cy.visit({url: 'https://example.cypress.io/'})
       * @param {Partial<VisitOptions> & { url: string }} options - VisitOptions with url
       * @returns Chainable<AUTWindow>
       */
      visit(
        options: Partial<VisitOptions> & { url: string }
      ): Chainable<AUTWindow>;

      /**
       * Visit author's website
       * @example cy.visit('https://example.cypress.io/', { failOnStatusCode: false })
       * @param {string} url - url
       * @param {Partial<VisitOptions>} options - VisitOptions
       * @returns Chainable<AUTWindow>
       */
      visit(
        url: string,
        options?: Partial<VisitOptions>
      ): Chainable<AUTWindow>;

      // advanced example fixing the types
      drag(options: any): void

      dismiss(options: any): void

      console(method: any): any
    }
  }
}