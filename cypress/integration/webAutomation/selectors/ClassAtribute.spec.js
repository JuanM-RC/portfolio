/// <reference types="Cypress" />
import ClassAttrPage from 
"../../../support/pageObjects/webAutomation/selectors/ClassAttrPage";

const page = new ClassAttrPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });


    it ("Class Atribute", function(){
        
        page.getClassAtribute().click()

        page.getBlueButtonClassAttr().click()
    })



})