export class PracticeFormPage {
    static fillUpTheForm() {
        this.setName();
        this.setLastname();
        this.setEmail();
        this.setPhone();
        this.setGender();
        this.setDate();
        this.setSubject();
        this.setHobby();
        this.setCurrentAddress();
        this.setState();
        this.setCity();
    }

    //helper functions
    static setName() {
        cy.get('#firstName').type('Max');
    }

    static setLastname() {
        cy.get('#lastName').type('A');
    }

    static setEmail() {
        cy.get('#userEmail').type('max.email@va.lv');
    }

    static setPhone() {
        cy.get('#userNumber').type('3712912345');
    }
    static setGender() {
        cy.get('#gender-radio-1').check();
    }

    static setDate() {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1930');
        cy.get('.react-datepicker__month-select').select('February');
        cy.get('.react-datepicker__day').contains('28').click();
    }

    static setSubject() {
        cy.get('#subjectsInput').type('Economics{enter}');
    }

    static setHobby() {
        cy.get('#hobbies-checkbox-3').check();
    }

    static setCurrentAddress() {
        cy.get('#currentAddress').type('Delhi street 123, korpuss-5, India');
    }

    static setState() {
        cy.get('#state').click();
        cy.contains('NCR').click();
    }

    static setCity() {
        cy.get('#city').click();
        cy.contains('Delhi').click();
    }

    static clickOnSubmitButton() {
        cy.get('#submit').click();
    }
}