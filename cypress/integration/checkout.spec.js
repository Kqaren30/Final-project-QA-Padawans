describe ("Buy gift cards",()=>{


    it("Pre-conditions",()=>{

        cy.visit("/")

        cy.configureShipping("United States","US Dollar")

        //cy.get('.glClose').click({force : true })

        cy.wait(4000)

        cy.contains("Gift Cards").click({force : true})

        cy.wait(500)

        //Add $10 gift card

        cy.contains('Add To Cart').click({force:true})

        cy.wait(2000)

        cy.get('.cart-item-title').should("have.text","Modcloth Gift Card - $10.00")

        cy.get('.ml-auto > .cart-count-badge > .amount').should("have.text","1")

        cy.contains("Checkout").click({force : true}) 

    })

    it("Checkout - Happy path", ()=>{

       //As a user, I can checkout successfully

       cy.wait(1000)

       cy.get('#checkout_email').type("karen@gmail.com")

       cy.get('#checkout_billing_address_country').select(0)

       cy.get('#checkout_billing_address_first_name').type("Karen")

       cy.get('#checkout_billing_address_last_name').type("Robles")

       cy.get('#checkout_billing_address_address1').type("Mapple street #16")

       cy.get('#checkout_billing_address_address2').type("Apartment")

       cy.get('#checkout_billing_address_city').type("Orlando")

       cy.get('#checkout_billing_address_province').select("Florida")

       cy.get('#checkout_billing_address_zip').type("32789")

       cy.get('#checkout_billing_address_phone').type("555444565")

       //cy.contains("Continue to payment").click()


    })
/*
    it("credit card page",()=>{

        cy.contains("Continue to payment").click()
    })

    it("credit card info", ()=>{

        cy.wait(6000)

        cy.get('[id="number"]').type("")

        cy.get('[id="name"]').type("")

        cy.get('[id="expiry"]').type("")

        cy.get('[id="verification_value"]').type("")

        cy.contains("Mapple street #16, Apartment, Orlando FL 32789, United States").should("exist")

        cy.contains("karen@gmail.com").should("exist")

        cy.get('[class="address address--tight"]').should("contain","Mapple street #16, Apartment, Orlando FL 32789, United States")


    })*/

})