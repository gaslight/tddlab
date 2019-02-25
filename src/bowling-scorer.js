import { LitElement, html, css } from 'lit-element';
import { openWc } from './open-wc-logo';

class BowlingScorer extends LitElement {
  static get properties() {
    return {
      score: { type: Number },
    };
  }

  constructor() {
    super();
    this.score = 0;
  }

  render() {
    return html`
      <div>Score: ${this.score}</div>
      <input name="roll" />
      <button>Roll!</button>
   `;
  }
}

customElements.define('bowling-scorer', BowlingScorer);
