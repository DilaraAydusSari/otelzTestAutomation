/// <reference types="cypress" />

import MainPage from "../pages/main-page";
import HomePage from "../pages/home-page"
import LoginPage from "../pages/login-page";
import Base from "../base/base";
import SearchingPage from "../pages/searching-page";

describe('Search Tests', () => {

    const homePage = new HomePage;
    const loginPage = new LoginPage;
    const mainPage = new MainPage;
    const base = new Base;
    const searchingPage = new SearchingPage;

    it('Search Hotels', () => {
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
    })

    it('Choose Highest Star Hotels Button', () => {
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
        base.wait(3000);
        searchingPage.highestStar();
    })

    it('Choose Lowest Price Hotels Button', () => {
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
        base.wait(3000);
        searchingPage.lowestPrice();
    })

    it('Yacht Rental', () => {
        mainPage.visit();
        homePage.allowCookies();
        loginPage
            .clickLogin()
            .fillEmail("dilekdnm@gmail.com")
            .fillPassword("dnm888")
            .clickLoginButton();
        base.wait(3000);
        homePage.clickYacht();
    })

})