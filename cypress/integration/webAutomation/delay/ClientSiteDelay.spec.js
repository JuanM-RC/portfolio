/// <reference types="Cypress" />
import ClientDelayPage from 
"../../../support/pageObjects/WebAutomation/delay/ClientDelayPage"

const page = new ClientDelayPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Client Side Delay", function(){
        
        //Access the page
        page.getClientSideDelay().click()

        //Click on the button to make request
        page.getAJAXButton().click()

        //Timeout included in the PO
        page.getAJAXText().click()
    })



})