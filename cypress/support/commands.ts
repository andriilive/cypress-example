// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import {AUTHOR_HOME} from "@cy/const";

// Register a custom command
Cypress.Commands.add('go_home', () => cy.visit(AUTHOR_HOME))

// Overwrite an existing command
Cypress.Commands.overwrite('visit', (originalFn, url, options) => originalFn(url, options))


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })