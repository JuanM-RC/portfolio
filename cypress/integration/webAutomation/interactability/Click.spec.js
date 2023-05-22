/// <reference types="Cypress" />
import ClickPage from 
"../../../support/pageObjects/WebAutomation/interactability/ClickPage"

const page = new ClickPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Click", function(){
        
        page.getClick().click()

        //The issue here is that the button wont register "fake" clicks
        //(DOM events). Because Cypress doesnt use these, we can just go ahead
        //and assert that the button is visible and the class change
        //after the click.

        page.getBadButton()
        .should('have.class', 'btn-primary')
        .click()
        .should('have.class', 'btn-success')
    })


})