class AJAXPage{
    
    getAJAX(){
        return cy.get('a[href="/ajax"]')
    }

    getAJAXButton(){
        return cy.get('#ajaxButton')
    }
 
    getAJAXText(){
        return cy.get('.bg-success', {timeout:30000});
    }
}
export default AJAXPage
