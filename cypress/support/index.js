import './commands'
import '@testing-library/cypress/add-commands'
import '@cypress/code-coverage/support'

// ignore uncaught exceptions
Cypress.on('uncaught:exception', () => {
  return false
})
