/// <reference types="Cypress" />

describe("Read-Write files content", function () {
  it("Write to a file", function () {
    cy.writeFile("dummy.txt", "Hello World\n");
    cy.writeFile("dummy.txt", "I am Nishant", { flag: "a+" });
  });

  it("Read from a file", function () {
    cy.readFile("dummy").should("contains", "Hello World");
  });
});

// 2 major difference between cy.readFile and cy.fixture command - check the repository readme file
