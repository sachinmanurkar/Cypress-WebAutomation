// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (password) => {

    cy.get('.js-modal-open-login-modal').click()
    cy.get('#Password').type(password)
    cy.get('button.btn--narrow[type=submit]').click()
})

Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('.full-width-link').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.get('.full-width-link').eq(index).click()
            return false;

        }
    })
})

Cypress.Commands.add("selectDropDown", (optiontext) => {
    cy.get('#SortBy').contains(optiontext)
        .then(element => {
            var text = element.text();
            cy.get('#SortBy').select(text);
        })
})

Cypress.Commands.add("selectSize", (size) => {
    cy.get('#SingleOptionSelector-1').contains(size)
        .then(element => {
            var text = element.text();
            cy.get('#SingleOptionSelector-1').select(text)
        })
})

Cypress.Commands.add('addToCartAndVerify', () => {
    cy.get('.product-form__item > .btn').click()
    cy.get('#CartPopupHeading').should('contain.text', 'Just added to your cart')

})
