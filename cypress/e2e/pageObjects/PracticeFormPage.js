import {StudentDto} from "./dto/StudentDto";

export class PracticeFormPage {
    static fillUpTheForm() {
        StudentDto.firstName = this.setFirstname();
        StudentDto.lastName = this.setLastname();
        StudentDto.email = this.setEmail();
        StudentDto.phone = this.setPhone();
        StudentDto.gender = this.setGender();
        this.setDate();
        StudentDto.subject = this.setSubject();
        StudentDto.hobby = this.setHobby();
        this.addPicture();
        StudentDto.currentAddress = this.setCurrentAddress();
        StudentDto.state = this.setState();
        StudentDto.city = this.setCity();

        return StudentDto;
    }

    //helper functions
    static setFirstname() {
        const firstName = 'Max';
        cy.get('#firstName').type(firstName);
        return firstName;
    }

    static setLastname() {
        const lastName = 'A';
        cy.get('#lastName').type(lastName);
        return lastName;
    }

    static setEmail() {
        const email = 'max.email@va.lv'
        cy.get('#userEmail').type(email);
        return email;
    }

    static setPhone() {
        const phone = '3712912345';
        cy.get('#userNumber').type(phone);
        return phone;
    }

    static setGender() {
        const gender = 'Male';
        cy.get('#gender-radio-1').check();
        return gender;
    }

    static setDate() {
        const birthYear = '1930';
        const birthMonth = 'February';
        const birthDay = '28';

        StudentDto.birthYear = birthYear;
        StudentDto.birthMonth = birthMonth;
        StudentDto.birthDay = birthDay;
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select(birthYear);
        cy.get('.react-datepicker__month-select').select(birthMonth);
        cy.get('.react-datepicker__day').contains(birthDay).click();
    }

    static setSubject() {
        const subject = 'Economics';
        cy.get('#subjectsInput').type(`${subject}{enter}`);
        return subject;
    }

    static setHobby() {
        const hobby = 'Music';
        cy.get('#hobbies-checkbox-3').check();
        return hobby;
    }

    static addPicture() {
        const picture = 'via_lv_logo.webp';
        const picturePath = 'cypress/e2e/resource/via_lv_logo.webp';
        StudentDto.picture = picture;
        StudentDto.picturePath = picturePath;
        cy.get('#uploadPicture').selectFile(picturePath);
    }

    static setCurrentAddress() {
        const currentAddress = 'Delhi street 123, korpuss-5, India';
        cy.get('#currentAddress').type(currentAddress);
        return currentAddress;
    }

    static setState() {
        const state = 'NCR';
        cy.get('#state').click();
        cy.contains(state).click();
        return state;
    }

    static setCity() {
        const city = 'Delhi';
        cy.get('#city').click();
        cy.contains(city).click();
        return city;
    }

    static clickOnSubmitButton() {
        cy.get('#submit').click();
    }
}