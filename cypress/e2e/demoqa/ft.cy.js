import {VisitBasePage} from "../pageObjects/VisitBasePage";
import {PracticeFormPage} from "../pageObjects/PracticeFormPage";

describe('ft - Maksims A', () => {
    context('ft test scenario', () => {
        afterEach(function () {
            cy.task('log', 'test result state: ' + this.currentTest.state)
        });

        it('Test scenario 1 - making an appointment', () => {
            VisitBasePage.visit();
            PracticeFormPage.fillUpTheForm();
            // PracticeFormPage.clickOnSubmitButton();
        });
    });
});