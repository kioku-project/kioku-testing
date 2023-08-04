import LoginPage from "../pageobjects/login.page.js";
import UserPage from "../pageobjects/user.page.js";
import { expect } from "@wdio/globals";
import { randomUUID } from "crypto";

var email = `TestUser${randomUUID()}@example.com`;

describe("Login page", () => {
    it("should register user with valid data", async () => {
        await LoginPage.open();
        await LoginPage.switchLogin.click();
        await LoginPage.register(email, "TestUser", "SuperSecretPassword!");
    });
    it("should login user with valid credentials", async () => {
        await LoginPage.open();
        await LoginPage.login(email, "SuperSecretPassword!");
        await expect(UserPage.headerText).toHaveTextContaining("TestUser");
    });
});
