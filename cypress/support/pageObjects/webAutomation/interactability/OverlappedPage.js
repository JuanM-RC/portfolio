class OverlappedPage{

    getOverlappedElement(){
        return cy.get('a[href="/overlapped"]')
    }

    getName(){
        return cy.get('#name')
    }
}
export default OverlappedPage
