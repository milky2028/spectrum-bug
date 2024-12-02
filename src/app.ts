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
import "@spectrum-web-components/menu/sp-menu.js";
import "@spectrum-web-components/menu/sp-menu-group.js";
import "@spectrum-web-components/menu/sp-menu-item.js";
import "@spectrum-web-components/menu/sp-menu-divider.js";

import { MobxLitElement } from "@adobe/lit-mobx";
import { customElement } from "lit/decorators.js";

function isMacOS(): boolean {
  return navigator.platform === "MacIntel";
}

const OS_CMD_CTRL_KEY = (
  appendPlusOnMacOs = false,
  appendPlusOnWin = true
): string => {
  return isMacOS()
    ? `⌘${appendPlusOnMacOs ? " + " : ""}`
    : `Ctrl${appendPlusOnWin ? " + " : ""}`;
};

function t(_key: string, text: string) {
  return text;
}

function quickExportOptions() {
  return [
    {
      fileType: "jpeg",
      name: "JPEG",
      text: t(
        `UnifiedDownloadMenu.Options.QuickExportAsJPEG.Text`,
        `Quick export as a JPEG`
      ),
    },
    {
      fileType: "psd",
      name: "PSD",
      text: t(
        `UnifiedDownloadMenu.Options.QuickExportAsPSD.Text`,
        `Quick export as a PSD`
      ),
    },
    {
      fileType: "png",
      name: "PNG",
      text: t(
        `UnifiedDownloadMenu.Options.QuickExportAsPNG.Text`,
        `Quick export as a PNG`
      ),
    },
    {
      fileType: "tiff",
      name: "TIFF",
      text: t(
        `UnifiedDownloadMenu.Options.QuickExportAsTIFF.Text`,
        `Quick export as a TIFF`
      ),
    },
    {
      fileType: "webp",
      name: "WebP",
      text: t(
        `UnifiedDownloadMenu.Options.QuickExportAsWebP.Text`,
        `Quick export as a WebP`
      ),
    },
  ];
}

@customElement("t-app")
export class App extends MobxLitElement {
  render() {
    return html`<sp-theme scale="medium" color="dark">
      <sp-popover open style="position: relative">
        <sp-menu-item
          data-dp-command-id="100000"
          data-e2e="back-to-home"
          @click=${() => {
            console.log("ok");
          }}
        >
          Back to Home
        </sp-menu-item>

        <sp-menu-divider size="s"></sp-menu-divider>

        <sp-menu-item
          ?disabled=${false}
          data-dp-command-id="10"
          data-e2e="new"
          target="_blank"
          rel="noopener"
          @click=${() => {
            console.log("stuff");
          }}
        >
          New ...
        </sp-menu-item>

        <sp-menu-item
          ?disabled=${false}
          data-dp-command-id="20"
          data-e2e="open"
          @click=${() => {
            console.log("stuf");
          }}
        >
          Open...
        </sp-menu-item>

        <sp-menu-item
          ?disabled=${false}
          data-dp-command-id="30"
          data-e2e="save"
          @click=${() => {
            console.log("marks");
          }}
        >
          Save
          <kbd slot="value">${OS_CMD_CTRL_KEY()}S</kbd>
        </sp-menu-item>

        <sp-menu-item
          ?disabled=${false}
          data-dp-command-id="32"
          data-e2e="save-as"
          @click=${() => {
            console.log("listener");
          }}
        >
          Save as...
        </sp-menu-item>

            <sp-menu-item
                data-e2e="save-as"
                @click=${() => {}}
              >
               Save in Photoshop...
              </sp-menu-item>
              <sp-menu-divider size="s"></sp-menu-divider>
              <sp-menu-item
                data-e2e="save-to-lightroom"
                ?disabled=${false}
                @click=${() => {}}
              >
                Send to Lightroom...
              </sp-menu-item>

        <sp-menu-divider size="s"></sp-menu-divider>

        <sp-menu-item
          ?disabled=${false}
          data-dp-menu-id="3"
          data-e2e="edit"
          data-trigger-menu-id="any"
          @sp-opened=${() => {}}
          @sp-closed=${() => {}}
        >
          Edit
          <sp-menu slot="submenu" id=${"sure"}>
      <sp-menu-item
        ?disabled=${false}
        data-dp-command-id="101"
        @click=${() => {}}
      >
        ${t("Navbar.Menu.Edit.Undo", "Undo")}
        <kbd slot="value">${OS_CMD_CTRL_KEY()}Z</kbd>
      </sp-menu-item>

      <sp-menu-item
        ?disabled=${false}
        data-dp-command-id="132"
        @click=${() => {}}
      >
        ${t("Navbar.Menu.Edit.Redo", "Redo")}
        <kbd slot="value">${OS_CMD_CTRL_KEY()}Z</kbd>
      </sp-menu-item>

      <sp-menu-divider size="s"></sp-menu-divider>

      <sp-menu-item
        ?disabled=${false}
        data-dp-command-id="103"
        @click=${() => {}}
      >
        ${t("Navbar.Menu.Edit.Cut", "Cut")}
        <kbd slot="value">${OS_CMD_CTRL_KEY()}X</kbd>
      </sp-menu-item>

      <sp-menu-item
        ?disabled=${"yerp"}
        data-dp-command-id="104"
        @click=${() => {}}
      >
        ${t("Navbar.Menu.Edit.Copy", "Copy")}
        <kbd slot="value">${OS_CMD_CTRL_KEY()}C</kbd>
      </sp-menu-item>

      <sp-menu-item
        ?disabled=${""}
        data-dp-command-id="1107"
        @click=${() => {}}
      >
        ${t("Navbar.Menu.Edit.CopyMerged", "Copy merged")}
        <kbd slot="value">${OS_CMD_CTRL_KEY()}C</kbd>
      </sp-menu-item>

      <sp-menu-item data-dp-command-id="105" @click=${() => {}}>
        ${t("Navbar.Menu.Edit.Paste", "Paste")}
        <kbd slot="value">${OS_CMD_CTRL_KEY()}V</kbd>
      </sp-menu-item>

      <sp-menu-divider size="s"></sp-menu-divider>

      <sp-menu-item
        data-dp-menu-id=${""}
        @sp-opened=${() => {}}
        @sp-closed=${() => {}}
        data-trigger-menu-id=${""}
      >
        ${t("Navbar.Menu.Edit.Fill", "Fill")}
        <psw-main-menu-fill slot="submenu"></psw-main-menu-fill>
      </sp-menu-item>

      <sp-menu-divider size="s"></sp-menu-divider>

      <sp-menu-item
        ?disabled=${false}
        data-dp-command-id="2207"
        @click=${() => {}}
      >
        ${t("Navbar.Menu.Edit.FreeTransform", "Free transform")}
        <kbd slot="value">${OS_CMD_CTRL_KEY()}T</kbd>
      </sp-menu-item>

      <sp-menu-item data-dp-menu-id="26" @sp-opened=${() => {}} @sp-closed=${() => {}}>
        ${t("Navbar.Menu.Edit.Transform.Title", "Transform")}

        <sp-menu slot="submenu" id=${""}>
          <sp-menu-item
            ?disabled=${false}
            data-dp-command-id="2208"
            @click=${() => {}}
          >
            ${t("Navbar.Menu.Edit.Transform.Rotate180", "Rotate 180°")}
          </sp-menu-item>

          <sp-menu-item
            ?disabled=${false}
            data-dp-command-id="2209"
            @click=${() => {}}
          >
            ${t(
              "Navbar.Menu.Edit.Transform.Rotate90cw",
              "Rotate 90° clockwise"
            )}
          </sp-menu-item>

          <sp-menu-item
            ?disabled=${false}
            data-dp-command-id="2210"
            @click=${() => {}}
          >
            ${t(
              "Navbar.Menu.Edit.Transform.Rotate90ccw",
              "Rotate 90° counter clockwise"
            )}
          </sp-menu-item>

          <sp-menu-divider size="s"></sp-menu-divider>

          <sp-menu-item
            ?disabled=${false}
            data-dp-command-id="2211"
            @click=${() => {}}
          >
            ${t("Navbar.Menu.Edit.Transform.FlipHorizontal", "Flip horizontal")}
          </sp-menu-item>

          <sp-menu-item
            ?disabled=${false}
            data-dp-command-id="2212"
            @click=${() => {}}
          >
            ${t("Navbar.Menu.Edit.Transform.FlipVertical", "Flip vertical")}
          </sp-menu-item>
        </sp-menu>
      </sp-menu-item>

      <sp-menu-divider size="s"></sp-menu-divider>

      <sp-menu-item
        ?disabled=${false}
        data-dp-command-id="1044"
        @click=${() => {}}
      >
        ${t("Navbar.Menu.Edit.Crop", "Crop")}
      </sp-menu-item>
    </sp-menu>
        </sp-menu-item>

        <sp-menu-item
          ?disabled=${false}
          data-dp-menu-id="5"
          data-e2e="image"
          @sp-opened=${() => {}}
          @sp-closed=${() => {}}
        >
          Image
          <!-- <psw-main-menu-image slot="submenu"></psw-main-menu-image> -->
        </sp-menu-item>

        <sp-menu-item
          ?disabled=${false}
          data-dp-menu-id="4"
          data-e2e="layer"
          @sp-opened=${() => {}}
          @sp-closed=${() => {}}
        >
          Layer
          <!-- <psw-main-menu-layer slot="submenu"></psw-main-menu-layer> -->
        </sp-menu-item>

        <sp-menu-item
          ?disabled=${false}
          data-dp-menu-id="7"
          data-e2e="select"
          @sp-opened=${() => {}}
          @sp-closed=${() => {}}
        >
          Select
          <!-- <psw-main-menu-select slot="submenu"></psw-main-menu-select> -->
        </sp-menu-item>

        <sp-menu-item
          ?disabled=${false}
          data-dp-menu-id="8"
          data-e2e="view"
          @sp-opened=${() => {}}
          @sp-closed=${() => {}}
        >
          View
          <!-- <psw-main-menu-view slot="submenu"></psw-main-menu-view> -->
        </sp-menu-item>

        <sp-menu-item
          ?disabled=${false}
          data-dp-menu-id="6"
          data-e2e="filter"
          @sp-opened=${() => {}}
          @sp-closed=${() => {}}
        >
          Filter
          <!-- <psw-main-menu-filter slot="submenu"></psw-main-menu-filter> -->
        </sp-menu-item>

        <sp-menu-divider size="s"></sp-menu-divider>

        <sp-menu-item
          ?disabled=${false}
          data-dp-command-id="3443"
          data-e2e="export-as"
          data-trigger-menu-id="yerp"
          @click=${() => {}}
        >
              <sp-menu slot="submenu" id="yerp">
                ${quickExportOptions().map(
                  ({ name }) =>
                    html`<sp-menu-item ?disabled=${false} @click=${() => {}}>
                      ${name}
                    </sp-menu-item>`
                )}
              </sp-menu>
          ${t("Navbar.Menu.ExportAs", "Export as")}
          <kbd slot="value">${OS_CMD_CTRL_KEY()}W</kbd>
        </sp-menu-item>

        <sp-menu-divider size="s"></sp-menu-divider>

        <sp-menu-item
          ?disabled=${false}
          data-dp-command-id="1032"
          data-e2e="import"
          @click=${() => {}}
        >
          ${t("Navbar.Menu.Import", "Import...")}
        </sp-menu-item>


            <sp-menu-item
              ?disabled=${false}
              @click=${() => {}}
            >
              ${t("Navbar.Menu.JoinSession", "Join coediting session")}
            </sp-menu-item>

        <sp-menu-divider size="s"></sp-menu-divider>

              <sp-menu-item
                  data-dp-command-id=${"huh"}
                  @click=${() => {}}
                >
                  ${t("Navbar.Menu.OpenInDesktop", "Open in desktop app")}
                </sp-menu-item>
                <sp-menu-divider size="s"></sp-menu-divider>
              <sp-menu-item
                  data-dp-command-id=${"hah"}
                  data-e2e="get-desktop-app"
                  @click=${() => {}}
                  target="_blank"
                >
                  ${t("Navbar.Menu.GetDesktopApp", "Get desktop app")}
                </sp-menu-item>
                <sp-menu-divider size="s"></sp-menu-divider>
              <sp-menu-item
                  @click=${() => {}}
                >
                  ${t("Navbar.Menu.OpenInIPad.Photoshop", "Open in Photoshop")}
                </sp-menu-item>
                <sp-menu-item
                  @click=${() => {}}
                >
                  ${t("Navbar.Menu.OpenInIPad.Fresco", "Open in Fresco")}
                </sp-menu-item>
                <sp-menu-divider size="s"></sp-menu-divider>
              <sp-menu-item
                @click=${() => {}}
              >
                ${t("Navbar.Menu.GetPwaApp", "Get browser app")}
              </sp-menu-item>

        <sp-menu-item
          data-dp-command-id="2311"
          data-e2e="menu-settings"
          @click=${() => {}}
        >
          ${t("Navbar.Menu.Settings.Title", "Settings...")}
          <kbd slot="value">${OS_CMD_CTRL_KEY()}K</kbd>
        </sp-menu-item>
      </psw-action-menu>
      </sp-popover>
    </sp-theme>`;
  }
}

render(html`<t-app></t-app>`, document.getElementById("root") as HTMLElement);
