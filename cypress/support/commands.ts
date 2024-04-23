import {AUTHOR_HOME} from "@cy/const";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Overwrite an existing commands
Cypress.Commands.overwrite('visit', (visitOriginalFn, url: string, options?: Partial<Cypress.VisitOptions>) => options ? visitOriginalFn(url, options) : visitOriginalFn(url))

// Register a custom command
Cypress.Commands.add('go_home', () => cy.visit(AUTHOR_HOME))

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })