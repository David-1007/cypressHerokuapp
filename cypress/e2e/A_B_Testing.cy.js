import { basePage } from "../Pages/Base";

describe('A_B_Testing', () => {
    it("Verify content in the page", () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.contains("A/B Testing").click();
        cy.get("#content p").should("contain", "Also known as split testing."); // basePage.NAMES.abTesting
    })
})