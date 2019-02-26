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
    this.rolls = [];
  }

  render() {
    return html`
      <div>Score: ${this.score}</div>
      <input name="roll" />
      <button @click=${this.onRoll}>Roll!</button>
   `;
  }

  onRoll(event) {
    console.log('on roll', event);
    this.rolls.push(this.shadowRoot.querySelector("input").value);
    this.score = this.rolls.reduce((total, roll) => total + Number(roll), 0);
  }
}

customElements.define('bowling-scorer', BowlingScorer);
