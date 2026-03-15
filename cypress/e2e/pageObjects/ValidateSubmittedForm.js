import {StudentDto} from "./dto/StudentDto";

export class ValidateSubmittedForm {
    static validateSubmittedForm(studentDto = StudentDto) {
        this.validateSuccessfulSubmit();
        this.validateStudentName(studentDto);
        this.validateStudentEmail(studentDto);
        this.validateGender(studentDto);
        this.validateMobile(studentDto);
        this.validateDateOfBirth(studentDto);
        this.validateSubjects(studentDto);
        this.validateHobbies(studentDto);
        this.validatePicture(studentDto);
        this.validateAddress(studentDto);
        this.validateStateAndCity(studentDto);
    }

    static validateSuccessfulSubmit() {
        cy.get('#example-modal-sizes-title-lg').should('be.visible').and('have.text', 'Thanks for submitting the form');
    }

    static validateStudentName(studentDto) {
        cy.contains('td', 'Student Name').next().should('have.text', studentDto.firstName + ' ' + studentDto.lastName);
    }

    static validateStudentEmail(studentDto) {
        cy.contains('td', 'Student Email').next().should('have.text', studentDto.email);
    }

    static validateGender(studentDto) {
        cy.contains('td', 'Gender').next().should('have.text', studentDto.gender);
    }

    static validateMobile(studentDto) {
        cy.contains('td', 'Mobile').next().should('have.text', studentDto.phone);
    }

    static validateDateOfBirth(studentDto) {
        cy.contains('td', 'Date of Birth').next().should('have.text', studentDto.birthDay + ' ' + studentDto.birthMonth + ',' + studentDto.birthYear);
    }

    static validateSubjects(studentDto) {
        cy.contains('td', 'Subjects').next().should('have.text', studentDto.subject);
    }

    static validateHobbies(studentDto) {
        cy.contains('td', 'Hobbies').next().should('have.text', studentDto.hobby);
    }

    static validatePicture(studentDto) {
        cy.contains('td', 'Picture').next().should('have.text', studentDto.picture);
    }

    static validateAddress(studentDto) {
        cy.contains('td', 'Address').next().should('have.text', studentDto.currentAddress);
    }

    static validateStateAndCity(studentDto) {
        cy.contains('td', 'State and City').next().should('have.text', studentDto.state + ' ' + studentDto.city);
    }
}