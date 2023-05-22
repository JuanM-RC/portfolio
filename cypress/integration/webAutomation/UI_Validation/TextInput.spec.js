/// <reference types="Cypress" />
import TextInputPage from 
"../../../support/pageObjects/webAutomation/UI_Validation/TextInputPage";

const page = new TextInputPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Text Input", function(){

        page.getTextInput().click()

        //variable declaration 

        let texto

        //Check that the initial text is not the text we will introduce later.
        page.getUpdatingButton().click().then(($t)=>{
            texto = $t.text()
            expect(texto).to.not.eq('wawawa')
        })

        //Type in the box
        page.getNewButtonName().type('wawawa')

        //Check change. 
        page.getUpdatingButton().click().then(($t)=>{
            texto = $t.text()
            expect(texto).to.eq('wawawa')
        })
    })


})