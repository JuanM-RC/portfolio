class ClickPage{

    getClick(){
        return cy.get('a[href="/click"]')
    }

    getBadButton(){
        return cy.get('#badButton')
    }
}
export default ClickPage
