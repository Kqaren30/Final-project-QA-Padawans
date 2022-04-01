describe("Value of gift cards", ()=>{

    it("USA and US Dollars", ()=>{
        //When the user has the United States configured as the shipping country and the US dollar as currency. 
        //Verify that the value of the gift cards are the following: $10.00, $25.00, $50.00, $100.00.

        cy.visit("/")

        cy.configureShipping("United States","US Dollar")

        cy.wait(4000)

        cy.contains("Gift Cards").click()

        cy.get('.selected > div > span').should("have.text","$10.00")

        cy.get('.grid > :nth-child(2) > div > span').should("have.text","$25.00")

        cy.get('.grid > :nth-child(3) > div > span').should("have.text","$50.00")

        cy.get('.grid > :nth-child(4) > div > span').should("have.text","$100.00")
    })

    it("Another country and US Dollars", ()=>{
        //When the user has configured a country other than the United States as the shipping country and US dollar as currency.
        //Verify that the value of the gift cards are the following: $10.00, $25.00, $50.00, $100.00.

        cy.visit("/")

        cy.configureShipping("México","US Dollar")

        cy.wait(4000)

        cy.contains("Gift Cards").click()

        cy.get('.selected > div > span').should("have.text","$10.00")

        cy.get('.grid > :nth-child(2) > div > span').should("have.text","$25.00")

        cy.get('.grid > :nth-child(3) > div > span').should("have.text","$50.00")

        cy.get('.grid > :nth-child(4) > div > span').should("have.text","$100.00")
    })
})