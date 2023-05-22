class VisibilityPage{

    
    getVisibility(){
        return cy.get('a[href="/visibility"]')
    }

    getHideButton(){
        return cy.get('#hideButton')
    }

    getRemovedButton(){
        return cy.get('#removedButton')
    }

    getZeroWidthButton(){
        return cy.get('#zeroWidthButton')
    }
        
    getTransparentButton(){
        return cy.get('#transparentButton')
    }
    
    getInvisibleButton(){
        return cy.get('#invisibleButton')
    }

    getNotInDisplayButton(){
        return cy.get('#notdisplayedButton')
    }

    getOverlappedButton(){
        return cy.get('#overlappedButton')
    }
    
    getHidingLayer(){
        return cy.get('#hidingLayer')
    }
    
    getOffscreenButton(){
        return cy.get('#offscreenButton')
    }
}
export default VisibilityPage
