/// <reference types="Cypress" />
import OverlappedPage from 
"../../../support/pageObjects/webAutomation/interactability/OverlappedPage";

const page = new OverlappedPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Overlapped Element", function(){
        

        page.getOverlappedElement().click()

        //Select the element, scroll it into view, write on it and then assert that it has
        //the introduced text.
        
        page.getName().scrollIntoView().type('1234qwerty')
        .should('have.value','1234qwerty')
    })

})