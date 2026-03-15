import {VisitBasePage} from "../pageObjects/VisitBasePage";
import {PracticeFormPage} from "../pageObjects/PracticeFormPage";
import {ValidateSubmittedForm} from "../pageObjects/ValidateSubmittedForm";

describe('ft - Maksims A', () => {
    context('ft test scenario', () => {
        afterEach(function () {
            cy.task('log', 'test result state: ' + this.currentTest.state)
        });

        it('Final Test scenario', () => {
            VisitBasePage.visit();
            PracticeFormPage.fillUpTheForm();
            PracticeFormPage.clickOnSubmitButton();
            ValidateSubmittedForm.validateSubmittedForm();
        });
    });
});