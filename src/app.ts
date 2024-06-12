import { html, render } from "lit";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/button-group/sp-button-group.js";
import "@spectrum-web-components/dialog/sp-dialog.js";
import "@spectrum-web-components/dialog/sp-dialog-base.js";
import "@spectrum-web-components/dialog/sp-dialog-wrapper.js";
import "@spectrum-web-components/overlay/sp-overlay.js";
import "@spectrum-web-components/overlay/overlay-trigger.js";
import "@spectrum-web-components/popover/sp-popover.js";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/src/themes.js";
import "@spectrum-web-components/tooltip/sp-tooltip.js";
import "@spectrum-web-components/underlay/sp-underlay.js";

import { MobxLitElement } from "@adobe/lit-mobx";
import { customElement } from "lit/decorators.js";

@customElement("t-app")
export class App extends MobxLitElement {
  render() {
    return html`<sp-theme scale="medium" color="dark">
      <sp-button> A button </sp-button>
    </sp-theme>`;
  }
}

render(html`<t-app></t-app>`, document.getElementById("root") as HTMLElement);
