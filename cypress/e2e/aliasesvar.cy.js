///<reference types='cypress'/>

describe("Variable and Aliases Demo", () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        });
        cy.visit('https://demoqa.com/modal-dialogs');
    });

    it("Closure & Variables", () => {
        cy.get("#showSmallModal").then(($modalButton) => {
            const smallModalText = $modalButton.text();
            cy.log(smallModalText);

            $modalButton.click();

            cy.get("#example-modal-sizes-title-sm").contains(smallModalText, { matchCase: false })
        });
    });

    it("Alias Demo", () => {

        cy.get("#showSmallModal").invoke('text').as('invokeText')

        cy.get("#showSmallModal").then($modalButton=>{
            const smallModalText = $modalButton.text()

            cy.log(smallModalText)
            cy.wrap(smallModalText).as('wrapText')
        })
    });

    it("Sharing context", function () {
        cy.log("Invoke Resule: "+this.invokeText)
        cy.log("Wrap Result: "+this.wrapText)
    });
});
