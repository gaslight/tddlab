class BowlingScorerWrapper {
  constructor(bowlingScorer) {
    this.bowlingScorer = bowlingScorer;
  }

  get score() {
    return this.bowlingScorer.shadowRoot.querySelector("#score").textContent
  }
  
  roll(pins) {
    const input = this.bowlingScorer.shadowRoot.querySelector("input");
    input.value = pins;
    const rollButton = this.bowlingScorer.shadowRoot.querySelector("button");
    rollButton.click();
    return this.bowlingScorer.updateComplete;
  }
}

export default BowlingScorerWrapper;