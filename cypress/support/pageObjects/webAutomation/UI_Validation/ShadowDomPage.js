class ShadowDomPage{
    
    getShadowDOM(){
        return cy.get('a[href="/shadowdom"]')
    }

    getGenerateButton(){
        return cy.get('guid-generator').shadow().find('#buttonGenerate')
    }

    getEditField(){
        return cy.get('guid-generator').shadow().find('#editField')
    }

    getCopyButton(){
        return cy.get('guid-generator').shadow().find('#buttonCopy')
    }
}
export default ShadowDomPage
