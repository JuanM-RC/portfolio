/// <reference types="Cypress" />
import LayersPage from 
"../../../support/pageObjects/webAutomation/interactability/LayersPage";

const page = new LayersPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Hidden Layers", function(){
        
        page.getHiddenLayers().click()


        //When we try to click on the button and we get an error that includes the text
        // "Is being covered by..."
        //the tests passes because you cant click on the button
      

        page.getGreenButtonHidden().then(() => {

            cy.on('fail', (error, runnable) => {

                if (!error.message.includes('is being covered by another element:')) {
                    throw error
                }
    
            })
          })
    
        page.getGreenButtonHidden().click()

        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('is being covered by another element:')
            return false
        })
    })




})