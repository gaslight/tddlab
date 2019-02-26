import { LitElement, html, css } from 'lit-element';
import calculateScore from './calculate-score';

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
      <div>Score: <span id="score">${this.score}</span></div>
      <input name="roll" />
      <button @click=${this.onRoll}>Roll!</button>
   `;
  }

  onRoll(event) {
    this.rolls.push(Number(this.shadowRoot.querySelector("input").value));
    this.score = calculateScore(this.rolls);
  }
}

customElements.define('bowling-scorer', BowlingScorer);
