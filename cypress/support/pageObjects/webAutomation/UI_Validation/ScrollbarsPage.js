class ScrollBarPage{

    getScrollbars(){
        return cy.get('a[href="/scrollbars"]')
    }
    
    getHidingButton(){
        return cy.get('#hidingButton')
    }
}
export default ScrollBarPage
