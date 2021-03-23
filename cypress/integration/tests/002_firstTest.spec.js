/// <reference types="Cypress" />

// First Test
describe("Login", function () {
  it("Sign in", function () {
    cy.visit("https://react-redux.realworld.io/#/login");
    cy.get('input[type="email"]').type("cypress.demotests@gmail.com");
    cy.get('input[type="password"]').type("admin123");
    cy.get(".btn").contains("Sign in").should("be.visible").click();
  });
});
