import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UserPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get headerText() {
        return $("#headerTextId");
    }
}

export default new UserPage();
