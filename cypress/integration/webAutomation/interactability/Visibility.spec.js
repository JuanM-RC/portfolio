/// <reference types="Cypress" />
import VisibilityPage from 
"../../../support/pageObjects/webAutomation/interactability/VisibilityPage";

const page = new VisibilityPage();


//This Test should be executed HEADED.

        
describe("web testing automation portfolio", function(){

    this.beforeEach(function(){

        cy.fixture("WebAutomationFixture").then(function(data){
            this.data=data
        }) 
    })

    beforeEach(function(){
        
        cy.visit(this.data.URL);
    });

    it ("Visibility", function(){
        
        page.getVisibility().click()

        cy.viewport(1920, 1080); // Set the viewport to a specific size

        page.getHideButton().click()

        //These 5 cases cypress detects as non visible without doing anything extra
    
        page.getRemovedButton().should('not.exist')
        page.getZeroWidthButton().should('not.be.visible')
        page.getTransparentButton().should('not.be.visible')
        page.getInvisibleButton().should('not.be.visible')
        page.getNotInDisplayButton().should('not.be.visible')

        //When the button is behind another element cypress still
        //"sees" it as visible=true. Because of this, we are going to 
        //describe the limits of the overlaid object and determine whether
        //or not the button is visible

        page.getHidingLayer().then(($overlay) => {
            const overlayClientRects = $overlay[0].getClientRects();
          
            // Combine all client rects to create a bounding box for the overlay
            const overlayBox = overlayClientRects[0];
            for (let i = 1; i < overlayClientRects.length; i++) {
              overlayBox.left = Math.min(overlayBox.left, overlayClientRects[i].left);
              overlayBox.top = Math.min(overlayBox.top, overlayClientRects[i].top);
              overlayBox.right = Math.max(overlayBox.right, overlayClientRects[i].right);
              overlayBox.bottom = Math.max(overlayBox.bottom, overlayClientRects[i].bottom);
            }
          
            // Check that the button is not fully contained in the overlay box
            expect(
              buttonRect.left >= overlayBox.left &&
              buttonRect.top >= overlayBox.top &&
              buttonRect.right <= overlayBox.right &&
              buttonRect.bottom <= overlayBox.bottom
            ).to.be.false;
         
                   
        })
        
      
        //When an object is not on the screen Cypress sees it as visible
        //although it is not to the user. Now we assert that the button
        //is not located within the visible screen
    
      
        page.getOffscreenButton().then($button => {
            //We describe the button's bounds
            const buttonRect = $button[0].getBoundingClientRect();
            //We describe out viewport's size
            const viewportWidth = Cypress.config('viewportWidth') || window.innerWidth;
            const viewportHeight = Cypress.config('viewportHeight') || window.innerHeight;
      
            //We assert that the button is out of bounds.
            expect(
                buttonRect.bottom < 0 ||
                buttonRect.top > viewportHeight ||
                buttonRect.right < 0 ||
                buttonRect.left > viewportWidth
            ).to.be.true;
        });
    })



})