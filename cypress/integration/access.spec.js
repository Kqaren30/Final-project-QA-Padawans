
describe ("Access to the Gift Cards", ()=>{

    beforeEach(()=>{
        
        cy.visit("/")

        cy.get('.glClose').click({force : true })

        cy.wait(1000)

    })

    it("Access by the header",()=>{
        // As a user, I must be able to access the "Gift Cards" in the search option of the header

        cy.get('[id="icon_search"]').click()

        cy.get('#nogin-search-app > div > form > input').type("Modcloth Gift Card")

        cy.get('.product-title > a').click()

        //The user can validate that he is on the "Gift Cards" page with its title and url
        
        cy.url().should("eq","https://modcloth.com/products/modcloth-gift-card")

        cy.get('#ProductTitle').should("have.text","Modcloth Gift Card")

    })

    it("Access by the footer",()=>{
        // As a user, I must be able to access the "Gift Cards" from the footer

        cy.get('.nav-link-gift-cards > .nav-link').click({force : true })

        //The user can validate that he is on the "Gift Cards" page with its title and url
        
        cy.url().should("eq","https://modcloth.com/products/modcloth-gift-card")

        cy.get('#ProductTitle').should("have.text","Modcloth Gift Card")

    })
})