class VerifyTextPage{
    
    getVerifyText(){
        return cy.get('a[href="/verifytext"]')
    }
       
    
    getAllText(){
        return cy.get(".bg-primary .badge-secondary")
    }

    getOnlyVariableText(){
        return cy.get(".bg-primary .badge-secondary span")
    }
       
}
export default VerifyTextPage
