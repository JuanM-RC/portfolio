/// <reference types="Cypress" />
import AJAXPage from 
"../../../support/pageObjects/WebAutomation/delay/AJAXPage"

const page = new AJAXPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });


    it ("AJAX Data", function(){
        

        //Access the page
        page.getAJAX().click()

        //Click on the button to make request
        page.getAJAXButton().click()

        //Because the element is added to the DOM visible adding timeout
        //in the "should" wont work. The increased timeout is added in the "get"
        //method (see page object)

        page.getAJAXText().should('be.visible').click()
    })

})