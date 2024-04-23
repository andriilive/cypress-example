# Cypress example

[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine)&nbsp;

This is a simple example of how to use Cypress to test a web application.

- TypeScript
- [JB Aqua](https://www.jetbrains.com/aqua) project
- [Cypress](https://www.cypress.io/) >= 13
- Chrome, Firefox, Safari browsers
- [cypress-image-diff](https://github.com/uktrade/cypress-image-diff) plugin

## Scripts

Use JB Aqua to run the following scripts:

```bash
# Install
npm install

# Open Cypress
npm run cypress:open

# Run Headless Tests (Electron)
npm run cypress:run

# Run Headless Tests (Chrome, Firefox, Safari)
npm run cypress:run:chrome
npm run cypress:run:firefox
npm run cypress:run:safari
```
