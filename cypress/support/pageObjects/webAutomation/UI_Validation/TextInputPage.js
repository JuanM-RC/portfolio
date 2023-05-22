class TextInputPage{
    
    getTextInput(){
        return cy.get('a[href="/textinput"]')
    }

    getNewButtonName(){
        return cy.get('#newButtonName')
    }

    getUpdatingButton(){
        return cy.get('#updatingButton')
    }

}
export default TextInputPage
