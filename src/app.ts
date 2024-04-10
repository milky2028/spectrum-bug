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

import { trigger } from "@spectrum-web-components/overlay";
import { observable, action } from "mobx";
import { MobxLitElement } from "@adobe/lit-mobx";
import { customElement } from "lit/decorators.js";

// random side note: color: white is necessary for browser consistency. On Firefox, example text here is black and on Chrome it's white.
const styles =
  "min-width: 5vw; min-height: 5vh; padding: 2vw 2vh; color: white;";

const $oneIsOpened = observable.box(false);
const setOneOpen = action((state: boolean) => $oneIsOpened.set(state));

const popover1 = () =>
  html`<sp-popover
    style=${styles}
    @sp-opened=${() => {
      setOneOpen(true);
      console.log("two opened");
    }}
    @sp-closed=${() => {
      setOneOpen(false);
      console.log("two closed");
    }}
  >
    One
  </sp-popover>`;

const $twoIsOpened = observable.box(false);
const setTwoOpen = action((state: boolean) => $twoIsOpened.set(state));

const popover2 = () =>
  html`<sp-popover
    style=${styles}
    @sp-opened=${() => {
      setTwoOpen(true);
      console.log("two opened");
    }}
    @sp-closed=${() => {
      setTwoOpen(false);
      console.log("two closed");
    }}
  >
    Two
  </sp-popover>`;

@customElement("t-app")
export class App extends MobxLitElement {
  render() {
    return html`<sp-theme scale="medium" color="dark">
      <sp-button @click=${() => setOneOpen(!$oneIsOpened.get())}>
        Some outside mechanism that can open #1
      </sp-button>

      <br />
      <br />
      <br />

      <sp-action-button
        ?selected=${$oneIsOpened.get()}
        ${trigger(popover1, { open: $oneIsOpened.get() })}
      >
        #1
      </sp-action-button>
      <sp-action-button
        ?selected=${$twoIsOpened.get()}
        ${trigger(popover2, { open: $twoIsOpened.get() })}
      >
        #2
      </sp-action-button>
    </sp-theme>`;
  }
}

render(html`<t-app></t-app>`, document.getElementById("root") as HTMLElement);
