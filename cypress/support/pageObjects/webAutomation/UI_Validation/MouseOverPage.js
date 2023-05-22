class MouseOverPage{

    getMouseOver(){
        return cy.get('a[href="/mouseover"]')
    }

    getClickCount(){
        return cy.get('#clickCount')
    }

    getDynamicButton(){
        return cy.get('[title="Click me"]')
    }

    getActiveLink(){
        return cy.get('[title="Active Link"]')
    }
    
}
export default MouseOverPage
