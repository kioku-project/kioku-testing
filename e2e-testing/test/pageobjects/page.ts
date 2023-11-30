import { browser } from "@wdio/globals";

import { config } from "../../wdio.conf.ts";

export default class Page {
  public open(path: string) {
    return browser.url(`${config.baseUrl}/${path}`);
  }
}
