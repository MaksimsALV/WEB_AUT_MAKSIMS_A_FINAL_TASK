import {VisitBasePage} from "../pageObjects/VisitBasePage";
import {PracticeFormPage} from "../pageObjects/PracticeFormPage";
import {ValidateSubmittedForm} from "../pageObjects/ValidateSubmittedForm";

describe('Final Task - Maksims A', () => {
    context('Final Task test scenarios', () => {
        beforeEach(() => {
            VisitBasePage.visit();
        });
        afterEach(function () {
            cy.task('log', 'test result state: ' + this.currentTest.state)
        });

        it('TEST1: fill and submit the form', () => {
            PracticeFormPage.fillUpTheForm();
            PracticeFormPage.clickOnSubmitButton();
        });

        it('TEST2: validate submitted form', () => {
            PracticeFormPage.fillUpTheForm();
            PracticeFormPage.clickOnSubmitButton();
            ValidateSubmittedForm.validateSubmittedForm();
        });
    });
});