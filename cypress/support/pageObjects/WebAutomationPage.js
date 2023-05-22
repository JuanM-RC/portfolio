class WebAutomationPage{

    getDynamicID(){
        return cy.get('a[href="/dynamicid"]')
    }

    getButtonNotID(){
        return cy.get('.btn.btn-primary')
    }
    
    getClassAtribute(){
        return cy.get('a[href="/classattr"]')
    }

    getBlueButtonClassAttr(){
        return cy.get('.btn-primary')
    }

    getHiddenLayers(){
        return cy.get('a[href="/hiddenlayers"]')
    }

    getGreenButtonHidden(){
        return cy.get('#greenButton')
    }
    
    getBlueButtonHidden(){
        return cy.get('#blueButton')
    }

    getLoadDelay(){
        return cy.get('a[href="/loaddelay"]')
    }
      
    getAJAX(){
        return cy.get('a[href="/ajax"]')
    }

    getAJAXButton(){
        return cy.get('#ajaxButton')
    }
 
    getAJAXText(){
        return cy.get('.bg-success', {timeout:30000});
    }
      
    getClientSideDelay(){
        return cy.get('a[href="/clientdelay"]')
    }
      
    getClick(){
        return cy.get('a[href="/click"]')
    }

    getBadButton(){
        return cy.get('#badButton')
    }
      
    getTextInput(){
        return cy.get('a[href="/textinput"]')
    }

    getNewButtonName(){
        return cy.get('#newButtonName')
    }

    getUpdatingButton(){
        return cy.get('#updatingButton')
    }

      
    getScrollbars(){
        return cy.get('a[href="/scrollbars"]')
    }


    getHidingButton(){
        return cy.get('#hidingButton')
    }
   
    getDynamicTable(){
        return cy.get('a[href="/dynamictable"]')
    }

    getHeaderRow(){
        return cy.get('div[role="table"] [role="rowgroup"] [role="row"] [role="columnheader"]')

    }

    getContentRows(){
        return cy.get('div[role="table"] [role="rowgroup"] [role="row"] [role="cell"]')

    }
   
    getVerifyText(){
        return cy.get('a[href="/verifytext"]')
    }
       
    
    getAllText(){
        return cy.get(".bg-primary .badge-secondary")
    }

    getOnlyVariableText(){
        return cy.get(".bg-primary .badge-secondary span")
    }
       
    getProgressBar(){
        return cy.get('a[href="/progressbar"]')
    }

    getStartButton(){
        return cy.get('#startButton')
    }

    getStopButton(){
        return cy.get('#stopButton')
    }

    getProgressBarElement(){
        return cy.get('#progressBar')
    }

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

    getSampleApp(){
        return cy.get('a[href="/sampleapp"]')
    }

    getLogin(){
        return cy.get('#login')
    }

    getLoginStatus(){
        return cy.get('#loginstatus')
    }

    getUserName(){
        return cy.get('input[name="UserName"]')
    }
       
    getPassword(){
        return cy.get('input[type="password"]')
    }

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

    getName(){
        return cy.get('#name')
    }
   
    getNonBreakingSpace(){
        return cy.get('a[href="/nbsp"]')
    }
       
    getOverlappedElement(){
        return cy.get('a[href="/overlapped"]')
    }

    getName(){
        return cy.get('#name')
    }
       
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
export default WebAutomationPage
