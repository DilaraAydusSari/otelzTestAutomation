/// <reference types="cypress" />

import MainPage from "../pages/main-page";
import HomePage from "../pages/home-page"
import LoginPage from "../pages/login-page";
import Base from "../base/base";
import HotelPage from "../pages/hotel-page";

describe('Book Tests', () => {

    const homePage = new HomePage;
    const loginPage = new LoginPage;
    const mainPage = new MainPage;
    const base = new Base;
    const hotelPage = new HotelPage;

    it('Book First Hotel', () => {
        mainPage.visit();
        homePage.allowCookies();
        loginPage
            .clickLogin()
            .fillEmail("dilekdnm@gmail.com")
            .fillPassword("dnm888")
            .clickLoginButton();
        base.wait(3000);
        homePage
            .fillWhere("Marmaris")
            .selectDate()
            .selectGuest()
            .clickSearch();
        base.wait(5000);
        cy.get("[class='btn btn-primary']").first().invoke('removeAttr', 'target').click();
        base.wait(5000);
        hotelPage.bookNow().controlPrices("Sizin için bulduğumuz en düşük fiyat");
    })

    it('Minimum Book Day', () => {
        mainPage.visit();
        homePage.allowCookies();
        loginPage
            .clickLogin()
            .fillEmail("dilekdnm@gmail.com")
            .fillPassword("dnm888")
            .clickLoginButton();
        base.wait(5000);
        homePage
            .fillWhere("Marmaris")
            .selectDate()
            .selectGuest()
            .clickSearch();
        base.wait(5000);
        cy.get("[class='btn btn-primary']").first().invoke('removeAttr', 'target').click();
        base.wait(5000);
        hotelPage.bookNow().controlMessage("konaklama yapmalısınız");
    })

    it('Save a Hotel with Hearth Icon', () => {
        mainPage.visit();
        homePage.allowCookies();
        loginPage
            .clickLogin()
            .fillEmail("dilekdnm@gmail.com")
            .fillPassword("dnm888")
            .clickLoginButton();
        base.wait(5000);
        homePage
            .fillWhere("Marmaris")
            .selectDate()
            .selectGuest()
            .clickSearch();
        base.wait(5000);
        cy.get("[class='btn btn-primary']").first().invoke('removeAttr', 'target').click();
        base.wait(5000);
        hotelPage.saveHotel();
    })

})