import { $ } from "@wdio/globals";
import Page from "./page.ts";

class LoginPage extends Page {
  public get switchLogin() {
    return $("#switchLoginButtonId");
  }

  public get emailInput() {
    return $("#emailInputFieldId");
  }
  public get usernameInput() {
    return $("#usernameInputFieldId");
  }
  public get passwordInput() {
    return $("#passwordInputFieldId");
  }
  public get repeatPwasswordInput() {
    return $("#repeatPasswordInputFieldId");
  }

  public get submitButton() {
    return $("#loginSubmitButtonId");
  }

  public async register(email: string, username: string, password: string) {
    await this.emailInput.setValue(email);
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.repeatPwasswordInput.setValue(password);
    await this.submitButton.click();
  }
  public async login(email: string, password: string) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.submitButton.click();
  }

  public open() {
    return super.open("login");
  }
}

export default new LoginPage();
