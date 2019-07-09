import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-dropdown/iron-dropdown.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        iron-dropdown {
          border: 1px solid gray;
          background: white;
          font-size: 2em;
        }
      </style>
      <button on-click="_openDropdown">open the dropdown</button>
      <iron-dropdown id="dropdown" horizontal-align="right" vertical-align="top">
        <div slot="dropdown-content">Hello!</div>
      </iron-dropdown>
    `;
  }

  _openDropdown() {
    this.$.dropdown.open();
  }
}
customElements.define('sample-element', SampleElement);