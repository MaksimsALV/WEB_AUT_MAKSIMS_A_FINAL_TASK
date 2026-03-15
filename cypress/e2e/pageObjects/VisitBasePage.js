export class VisitBasePage {
    static get url() {
        return '/automation-practice-form';
    }
    static visit() {
        cy.visit(this.url);
    }
}