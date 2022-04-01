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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("configureShipping",(country, currency)=>{

   // cy.get('.mobile-menu-icon').click()

    //cy.get('#ge_ss0_1 > #ge_flag').click()

    cy.get('[data-key="ChangeShippingCountry"]').click()

    cy.get('#gle_selectedCountry').select(country)

    if(country!="United States"){
    cy.get('#gle_selectedCurrency').select(currency)
    }

    cy.get('[data-key="SavenClose"]').click({force : true})

})

Cypress.Commands.add("selectCard",(amount,quantity)=>{

    cy.contains(amount).click()

    cy.get('.mb-4 > .flex > .text-input').select(quantity)

    cy.contains('Add To Cart').click()

    cy.wait(4000)

    cy.get('.cart-item-title').should("have.text","Modcloth Gift Card - "+amount)

    cy.get('.cart-item-price > span').should("have.text",amount)

    cy.get('.ml-auto > .cart-count-badge > .amount').should("have.text",quantity)

    cy.contains("Remove").click()

    cy.get('.flex > .cursor-pointer').click()

    cy.wait(1000)

})

Cypress.Commands.add("editCard",(amount)=>{

    cy.contains("Edit").click()

    cy.get('.flex.mt-2 > .text-input').select(amount)

    cy.wait(6500)

    //The amount change

    cy.get('.cart-item-title').should("have.text","Modcloth Gift Card - "+amount)

    cy.get('.cart-item-total > div').should("have.text",amount)

    //Subtotal changes when editing gift card amount

    cy.get('#cart-page-subtotal-price').should("have.text",amount)

})
