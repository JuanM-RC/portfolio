class SampleAppPage{

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
}
export default SampleAppPage
