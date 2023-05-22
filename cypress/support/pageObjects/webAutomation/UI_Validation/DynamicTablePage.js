class DynamicTablePage{

    getDynamicTable(){
        return cy.get('a[href="/dynamictable"]')
    }

    getHeaderRow(){
        return cy.get('div[role="table"] [role="rowgroup"] [role="row"] [role="columnheader"]')

    }

    getContentRowsChrome(){
        return cy.get('div[role="table"] [role="rowgroup"] [role="row"] [role="cell"]')
        .contains('Chrome').parent().children()

    }
    
}
export default DynamicTablePage
