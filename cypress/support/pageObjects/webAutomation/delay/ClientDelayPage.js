class ClientDelayPage{

    getAJAXButton(){
        return cy.get('#ajaxButton')
    }
 
    getAJAXText(){
        return cy.get('.bg-success', {timeout:30000});
    }
      
    getClientSideDelay(){
        return cy.get('a[href="/clientdelay"]')
    }
}
export default ClientDelayPage
