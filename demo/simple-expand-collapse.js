/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '../iron-collapse.js';

import '@polymer/paper-styles/shadow.js';
import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>

      :host {
        display: block;
      }

      #trigger {
        padding: 10px 15px;
        background-color: #ffff00;
        border: 1px solid #dedede;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        text-align: left;
      }

      :host([opened]) #trigger {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      iron-collapse {
        border: 1px solid #dedede;
        border-top: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        @apply --shadow-elevation-2dp;
      }
    </style>
    <button id="trigger" on-click="toggle" aria-expanded\$="[[opened]]" aria-controls="collapse">[[_getText(opened)]]</button>
    <iron-collapse id="collapse" opened="{{opened}}" horizontal="[[horizontal]]" no-animation="[[noAnimation]]" tabindex="0">
      <slot></slot>
    </iron-collapse>
`,

  is: 'simple-expand-collapse',

  properties: {

    horizontal: {type: Boolean},
    opened: {type: Boolean, reflectToAttribute: true},
    noAnimation: {type: Boolean},
  },

  toggle: function() {
    this.$.collapse.toggle();
  },

  _getText: function(opened) {
    return opened ? 'Collapse' : 'Expand';
  }
});
