/// <reference types="Cypress" />
import MouseOverPage from 
"../../../support/pageObjects/webAutomation/UI_Validation/MouseOverPage";

const page = new MouseOverPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Mouse Over", function(){
    
        page.getMouseOver().click()
      
        //Assert that click count starts at 0
        page.getClickCount().should('have.text','0')        
        
        //Mouse over, which generates a DOM change
        page.getDynamicButton().trigger('mouseenter')

        //Select the new element and double click.
        page.getActiveLink().should('be.visible').click().click()

        //Assert that click count is now 2.
        page.getClickCount().should('have.text','2')
    })


})