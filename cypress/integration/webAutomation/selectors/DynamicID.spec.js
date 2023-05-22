/// <reference types="Cypress" />
import DynamicIDPage from 
"../../../support/pageObjects/webAutomation/selectors/DynamicIDPage";

const page = new DynamicIDPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });


    it ("dynamicID", function(){

        page.getDynamicID().click()

        page.getButtonNotID()
    })
    
})