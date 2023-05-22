class LayersPage{

    getHiddenLayers(){
        return cy.get('a[href="/hiddenlayers"]')
    }

    getGreenButtonHidden(){
        return cy.get('#greenButton')
    }
    
    getBlueButtonHidden(){
        return cy.get('#blueButton')
    }
}
export default LayersPage
