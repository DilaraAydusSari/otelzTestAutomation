class HomePage {

    allowCookies() {
        cy.get("[id='cookieAccept'] button").first().click();
        return this;
    }

    controlUserName(value) {
        cy.get("[class='btn user-button ']").should("have.text",value);
        return this;
    }

    fillWhere(value) {
        cy.get("[class='search-input']").type(value, {delay:100});
        return this;
    }

    selectDate() {
        cy.get("[class='type_0 type_1 datepicker-opener']").click();
        return this;
    }

    selectGuest() {
        cy.get("[class='type_0 type_1 type_3 mobile_3']").click();
        return this;
    }

    clickSearch() {
        cy.get("[class='search-btn-group']").click();
        return this;
    }

    clickYacht() {
        cy.get("[class='sc-a70cf211-0 dOrpMk active']").click();
        return this;
    }

}
export default HomePage;