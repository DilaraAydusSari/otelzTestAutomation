/// <reference types="cypress" />

import MainPage from "../pages/main-page";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import Base from "../base/base";

describe('Login Tests', () => {

  const mainPage = new MainPage;
  const loginPage = new LoginPage;
  const homePage = new HomePage;
  const base = new Base;

  it('Login Successful', () => {
    mainPage.visit();
    homePage.allowCookies();
    loginPage
      .clickLogin()
      .fillEmail("dilekdnm@gmail.com")
      .fillPassword("dnm888")
      .clickLoginButton();
    base.wait(3000);
    homePage.controlUserName("Dilek Dilek");
  })

  it('Login with Wrong Password', () => {
    mainPage.visit();
    homePage.allowCookies();
    loginPage
      .clickLogin()
      .fillEmail("dilekdnm@gmail.com")
      .fillPassword("56dfg67")
      .clickLoginButton();
    base.wait(3000);
    loginPage.controlErrorMessage("Hatalı kullanıcı adı ve şifre.");
  })

  it('Login with Wrong Email', () => {
    mainPage.visit();
    homePage.allowCookies();
    loginPage
      .clickLogin()
      .fillEmail("dlkdnm0000@gmail.com")
      .fillPassword("dnm888")
      .clickLoginButton();
    base.wait(3000);
    loginPage.controlErrorMessage("Hatalı kullanıcı adı ve şifre.");
  })

  it('Login Max Email Character', () => {
    mainPage.visit();
    homePage.allowCookies();
    loginPage
      .clickLogin()
      .fillEmail("dlkdnm0000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com")
      .fillPassword("dnm888")
      .clickLoginButton();
    base.wait(3000);
    loginPage.controlErrorMessage("Hatalı kullanıcı adı ve şifre.");
  })

  it('Login Max Password Character', () => {
    mainPage.visit();
    homePage.allowCookies();
    loginPage
      .clickLogin()
      .fillEmail("dilekdnm@gmail.com")
      .fillPassword("dnm888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      .clickLoginButton();
    base.wait(3000);
    loginPage.controlErrorMessage2("Şifre en az 6 en fazla 32 karakterden oluşmalıdır.");
  })

  it('Login Min Password Character', () => {
    mainPage.visit();
    homePage.allowCookies();
    loginPage
      .clickLogin()
      .fillEmail("dilekdnm@gmail.com")
      .fillPassword("a")
      .clickLoginButton();
    base.wait(3000);
    loginPage.controlErrorMessage2("Şifre en az 6 en fazla 32 karakterden oluşmalıdır.");
  })

})