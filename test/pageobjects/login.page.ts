import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get switchLogin() {
        return $("#switchLoginButtonId");
    }

    public get emailInput() {
        return $("#emailInputId");
    }
    public get usernameInput() {
        return $("#usernameInputId");
    }
    public get passwordInput() {
        return $("#passwordInputId");
    }
    public get repeatPwasswordInput() {
        return $("#repeatPasswordInputId");
    }

    public get registerButton() {
        return $("#registerButtonId");
    }
    public get loginButton() {
        return $("#loginButtonId");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async register(email: string, username: string, password: string) {
        await this.emailInput.setValue(email);
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.repeatPwasswordInput.setValue(password);
        await this.registerButton.click();
    }
    public async login(email: string, password: string) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open("login");
    }
}

export default new LoginPage();
