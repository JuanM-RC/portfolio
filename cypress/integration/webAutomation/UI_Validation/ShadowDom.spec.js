/// <reference types="Cypress" />
import ShadowDomPage from 
"../../../support/pageObjects/webAutomation/UI_Validation/ShadowDomPage";

const page = new ShadowDomPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Shadow DOM", function(){

        page.getShadowDOM().click()

        var texto
        
        //Generate text
        page.getGenerateButton().click()

        
        //Access generated text and save it in "texto"
        page.getEditField().then(($t)=>{
            texto = $t.val()
        })

        //Click on the button that copies it into the clipboard
        page.getCopyButton().click();

        //access the clipboard and assert that the copied
        //text equals the generated text.
        cy.window().then((win) => {
            win.navigator.clipboard.readText().then((text) => {
            expect(text).to.eq(texto);
            });
        });
    })


})