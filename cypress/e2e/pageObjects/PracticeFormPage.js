export class PracticeFormPage {
    static fillUpTheForm() {
        cy.get('#firstName').type('Max');
        cy.get('#lastName').type('A');
        cy.get('#userEmail').type('max.email@va.lv');
        cy.get('#gender-radio-1').check();
        cy.get('#userNumber').type('3712912345');
        this.calendarWidgetSelection();
        cy.get('#subjectsInput').type('Economics{enter}');
        cy.get('#hobbies-checkbox-3').check();
        cy.get('#currentAddress').type('Delhi street 123, korpuss-5, India');
    }

    static calendarWidgetSelection() {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1930');
        cy.get('.react-datepicker__month-select').select('February');
        cy.get('.react-datepicker__day').contains('28').click();
    }

    static clickOnSubmitButton() {
        cy.get('#submit').click();
    }
}