/// <reference types = "cypress"/>

it("How to handle a Mouse Hower",()=>{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get(".mouse-hover-content").invoke("show").contains("Top").click()
    cy.url().should("contains", "top")

})