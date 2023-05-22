class ProgressBarPage{
       
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

}
export default ProgressBarPage
