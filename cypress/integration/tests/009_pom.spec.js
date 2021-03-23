/// <reference types="Cypress" />

import Login from "../pageObjects/login";

describe("Login", function () {
  const login = new Login();

  it("Sign in", function () {
    cy.visit("https://react-redux.realworld.io/#/login");
    login.email().type("cypress.demotests@gmail.com");
    login.password().type("admin123");
    login.signInButton().should("be.visible").click();
  });
});
