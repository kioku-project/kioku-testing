import { $ } from "@wdio/globals";
import Page from "./page.js";

class UserPage extends Page {
  public get headerText() {
    return $("#headerTitleId");
  }
}

export default new UserPage();
