import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/iron-swipeable-container/iron-swipeable-container.js';

class SampleElement extends PolymerElement {
    static get template() {
        return html`
    

    <iron-swipeable-container>
      <div>I can be swiped</div>
      <paper-card heading="Me too!"></paper-card>
    </iron-swipeable-container>
    `;
    }
}
customElements.define('sample-element', SampleElement);