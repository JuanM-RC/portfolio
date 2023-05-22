/// <reference types="Cypress" />
import 'cypress-xpath';
import NBSPage from '../../../support/pageObjects/webAutomation/selectors/NBSPage';

const page = new NBSPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });


    it ("Non-Breaking Space", function(){


        cy.visit(this.data.URL)
      
        page.getNonBreakingSpace().click()
    
        //we replace the space between "My" and "button" for a 
        //nonBreakingSpaceCharacter.
        //now the xpath selector works
        cy.xpath("//button[text()='My\u00A0Button']").click();
    })


})

