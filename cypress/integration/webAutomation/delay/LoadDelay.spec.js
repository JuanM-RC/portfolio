/// <reference types="Cypress" />
import LoadDelayPage from 
"../../../support/pageObjects/WebAutomation/delay/LoadDelayPage"

const page = new LoadDelayPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Load Delay", function(){
        
        page.getLoadDelay().should('be.visible').click()

        //We wait up to 10s until the button is visible before clicking.

        page.getButtonNotID().should('be.visible', {timeout:10000}).click()
    })



})