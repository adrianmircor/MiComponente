import { html, css, LitElement } from 'lit-element';

export class MiComponente extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--mi-componente-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 1;
  }

  __increment() {
    this.counter *= 2;
  }

  render() {
    return html`
      <p><b>Adrian</b></p>
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>Duplicar</button>
    `;
  }
}
