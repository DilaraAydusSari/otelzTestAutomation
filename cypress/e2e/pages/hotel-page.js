class HotelPage {

    bookNow () {
        cy.get("[class='btn btn-primary desktop ']").click();
        return this;
    }

    controlPrices(value) {
        cy.get("[id='roomPrices'] .title").first().should("have.text",value);
        return this;
    }

    controlMessage(value) {
        cy.get("[class='sc-9d0f44b0-0 jhSajm orange ']").first().should("contain.text",value);
        return this;
    }

    saveHotel() {
        cy.get("[class='sc-f80ef249-0 ksTMbD svg heart']").click();
        return this;
    }

}
export default HotelPage;