class LoginPage {

    clickLogin () {
        cy.get("[class='btn login ']").click();
        return this;
    }

    fillEmail (value) {
        cy.get("[name='userName']").type(value, {delay:100});
        return this;
    }

    fillPassword (value) {
        cy.get("[name='password']").type(value, {delay:100});
        return this;
    }

    clickLoginButton () {
        cy.get("[class='btn btn-primary big block']").click();
        return this;
    }

    controlErrorMessage (value) {
        cy.get("[class='message']").should('have.text',value);
        return this;
    }

    getPasswordInput() {
        return cy.get('input[name="password"]');
    }

    getFormGroup() {
        return this.getPasswordInput().closest('.form-group');
    }

    getErrorMessageSpan() {
        return this.getFormGroup().find('div');
    }

    controlErrorMessage2(expectedText) {
        this.getErrorMessageSpan().should('have.text', expectedText.trim());
    }
    
}
export default LoginPage;