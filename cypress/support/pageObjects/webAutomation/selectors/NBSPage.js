class NBSPage{

    getNonBreakingSpace(){
        return cy.get('a[href="/nbsp"]')
    }
       
}
export default NBSPage
