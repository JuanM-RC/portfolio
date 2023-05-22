/// <reference types="Cypress" />
import 'cypress-wait-until';
import ProgressBarPage from '../../../support/pageObjects/webAutomation/UI_Validation/ProgressBarPage'

const page = new ProgressBarPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Progress Bar", function(){

        page.getProgressBar().click()

        //Click on start button, progress bar starts changing

        page.getStartButton().click();

        //Listen to progress bar until it reaches 75
        cy.waitUntil(() => {
            return page.getProgressBarElement()
            .should('have.attr', 'style')
            .then((style) => {

            //Access style and get numeric value
            const width = parseInt(style.split(':')[1], 10);

            //print current value
            cy.log("Progress: "+width)

            //If it reaches 75 we click on the stop
            if (width >= 75) {
                return page.getStopButton().click();
            }

        
            //we return false to start in the waitUntil() while the value
            //doesnt reach 75
            return false; 
            })

        //We set a 1 min timeout and check the value every 0.05s.
        //Both of this values can be changed.

        }, { timeout: 60000, interval:50});     
            
    })


})