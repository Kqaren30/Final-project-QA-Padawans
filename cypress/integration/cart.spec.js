describe("Gift cards - cart",()=>{

    beforeEach(()=>{
        
        cy.visit("/")

        cy.configureShipping("United States","US Dollar")

        cy.wait(4000)

        cy.contains("Gift Cards").click({force : true})

        cy.contains('Add To Cart').click()

    })

    it("Select gift cards", ()=>{

        cy.wait(6000)
    
        //As a user, I can select N number of  gift cards to add it to the cart

        //Verify the $10 gift card

        cy.get('.cart-item-title').should("have.text","Modcloth Gift Card - $10.00")

        cy.get('.cart-item-price > span').should("have.text","$10.00")

        cy.get('.ml-auto > .cart-count-badge > .amount').should("have.text","1")

        // cy.get('.flex-row.w-full > .focus\:outline-none').should("have.value","1")

        cy.contains("Remove").click()

        cy.get('.flex > .cursor-pointer').click()

        //Add $25 gift card

        cy.selectCard("$25.00","2")

        //Add $50 gift card

        cy.selectCard("$50.00","3")

        //Add $100 gift card

        cy.selectCard("$100.00","4")

    })

    it.only("Edit Gift cards from cart", ()=>{

        cy.wait(1000)

        //As a user I can edit the gift card amount from the cart

        cy.contains('View Bag').click({force : true})

        cy.wait(1000)

        //The amount change

        cy.get('.cart-item-title').should("have.text","Modcloth Gift Card - $10.00")

        cy.get('.cart-item-total > div').should("have.text","$10.00")

        //Subtotal changes when editing gift card amount

        cy.get('#cart-page-subtotal-price').should("have.text","$10.00")

        //Change it to $25

        cy.editCard("$25.00")

        //Change it to $50

        cy.editCard("$50.00")

        //Change it to $100

        cy.editCard("$100.00")
        

    })

})