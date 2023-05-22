class LoadDelayPage{

    getLoadDelay(){
        return cy.get('a[href="/loaddelay"]')
    }

    getButtonNotID(){
        return cy.get('.btn.btn-primary')
    }
}
export default LoadDelayPage
