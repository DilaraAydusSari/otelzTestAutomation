class SearchingPage {

    highestStar () {
        cy.get("[class='sc-11e1677d-0 drfEqI col-12'] button").eq(1).click();
        return this;
    }

    lowestPrice () {
        cy.get("[class='sc-11e1677d-0 drfEqI col-12'] button").eq(5).click();
        return this;
    }

    chooseFirstHotel () {
        cy.get("[id='p-3684056']").click();
        return this;
    }

}
export default SearchingPage;