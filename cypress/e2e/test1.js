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
       // cy.get('.mb40 > :nth-child(3)').should('have.text',"Yours enquiry has been successfully sent to the store owner!")
        //property assertion
        //methode1
        //cy.get('a[title="Continue"]').should("have.property",'title')
        //methode2
        cy.document('a[title="Continue"]').should("have.property",'title')

        //assertion of title
        cy.document().should('have.property','title').and('eq','Contact Us')

        //assertion of title
        cy.title().should('include','Contact')
        cy.title().should('eq','Contact Us')
        //assertion Url
        cy.location('href').should('include','success')
        cy.location().its('href').should('include','success')
        cy.url().should('include','success')

        //return to home page
        cy.get('i[title="Home"]').click()
        //select items and print message after click
        cy.get('.prdocutname').contains('BeneFit Girl Meets Pearl').click().then(function(elemnt){

            console.log(elemnt.text()+" has been added")
        })
        //return to home page and select shipping
        cy.get('i[title="Home"]').click()
        cy.get('.info_links_footer').contains('Shipping').click().then(function(element1){
            console.log(element1.text()+" has been added")
        })
        //return to home page and select contact us
        cy.get('i[title="Home"]').click()
        cy.get('.info_links_footer').contains('Contact Us').click().then(function(element2){
            console.log(element2.text()+" has been added")
        })
        //return to home page and select Site Map
        cy.get('i[title="Home"]').click()
        cy.get('.info_links_footer').contains('Site Map').click().then(function(element3){
            console.log(element3.text()+" has been added")
        })

    });
    
});