///<reference types="cypress"/>
describe('welcome to my project', () => {
    it('the is a test Contat us', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type("sarah")
        cy.get('#ContactUsFrm_email').type("sarah@gmail.com")
        cy.get('textarea[id="ContactUsFrm_enquiry"]').type("this is a test")
        cy.get('button[title="Submit"]').click()
    });
    
    it.only('the is a assertion', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type("sarah")
        cy.get('#ContactUsFrm_email').type("sarah@gmail.com")
        cy.get('textarea[id="ContactUsFrm_enquiry"]').type("this is a test")
        cy.get('button[title="Submit"]').click()

        //positive senario
        cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!")
        //false senario
        cy.get('.mb40 > :nth-child(3)').should('have.text',"Yours enquiry has been successfully sent to the store owner!")

    });
    
});