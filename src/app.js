import { LitElement, html, css } from 'lit-element';

import './password-checker';

class NextApp extends LitElement {
  static get properties() {
    return {

    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <password-checker>
      </password-checker>

      <hr/>

      <password-checker>
        <p slot="header">
          HOLA! Esto es un header custom
        </p>

        <p slot="footer">
          ADIOS! Esto es un footer custom
        </p>
      </password-checker>
    `;
  }
  
}

customElements.define('next-app', NextApp);

