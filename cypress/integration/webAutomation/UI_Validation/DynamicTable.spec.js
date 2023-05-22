/// <reference types="Cypress" />
import DynamicTablePage from 
"../../../support/pageObjects/webAutomation/UI_Validation/DynamicTablePage";

const page = new DynamicTablePage();

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        cy.visit(this.data.URL);
    });

    it ("Dynamic Table", function(){
        
        page.getDynamicTable().click()

        //Variable declaration

        var index
        var firstCPUValue
        var secondCPUValue

        //select the row "columnheader" and then the cell that contains "CPU"

        page.getHeaderRow().contains('CPU').then((cell) => {

            //Save "CPU" cell index

            index = cell.index();
            cy.log(index)

            //find the row that contains "Chrome" and now go to the
            //column of "CPU". We save the value as "firstCPUValue"
    

            page.getContentRowsChrome()
                .eq(index)
                    .then((value)=>{
                        firstCPUValue = value.text()
                        cy.log(firstCPUValue)
                    })
        });

        //We select the text we want to validate and use regex to remove the
        //elements from the text that are not either numbers or the symbol %.
        //We save the value as "secondCPUValue"


        cy.contains('Chrome CPU').invoke('text')
            .then((text) => {
                const regex = /\d+(\.\d+)?%/;
                const result = text.match(regex);
                secondCPUValue = String(result[0]);
                cy.log(secondCPUValue)

                //We validate that first and second CPUValue are eq.
            }).then(()=>{
                expect(firstCPUValue).to.eq(secondCPUValue)
        });
    })


})