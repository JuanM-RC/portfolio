class ClassAttrPage{
    
    getClassAtribute(){
        return cy.get('a[href="/classattr"]')
    }

    getBlueButtonClassAttr(){
        return cy.get('.btn-primary')
    }
}
export default ClassAttrPage
