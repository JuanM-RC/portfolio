class DynamicIDPage{

    getDynamicID(){
        return cy.get('a[href="/dynamicid"]')
    }

    getButtonNotID(){
        return cy.get('.btn.btn-primary')
    }
}
export default DynamicIDPage
