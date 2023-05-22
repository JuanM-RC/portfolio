/// <reference types="Cypress" />
import VerifyTextPage from 
"../../../support/pageObjects/webAutomation/UI_Validation/VerifyTextPage";

const page = new VerifyTextPage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Verify Text", function(){
        
        var text1
        var text2

        page.getVerifyText().click()

        //select the whole text,
        //even the one that would be generated dynamically
      
        page.getAllText().then((f)=>{
            text1 = f.text()
            cy.log(text1)
        })

        //separate the text that could be changed (span)
        //and search for "welcome" + dynamic text
        //Then we check that both texts are eq.
     
        page.getOnlyVariableText().then((g)=>{
            text2 = g.text()
            cy.contains(" Welcome " + text2 + "!").then((h)=>{
                expect(h.text()).to.eq(text1)
            })
        })

    })


})