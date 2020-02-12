import { LitElement, html, css } from 'lit-element';

const PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/;

class PasswordChecker extends LitElement {
  static get is() {
    return 'password-checker';
  }

  static get properties() {
    return {

    };
  }

  static get styles() {
    return css`

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    Prueba slot

    <div>
      <slot name="header">
        HEADER
      </slot>
    </div>

    <slot name="main">
      MAIN
    </slot>

    <slot name="footer">
      FOOTER
    </slot>

    `;
  }
}

customElements.define(PasswordChecker.is, PasswordChecker);