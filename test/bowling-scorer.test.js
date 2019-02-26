import { html, fixture, expect } from '@open-wc/testing';

import '../src/bowling-scorer';
import BowlingScorerWrapper from './bowling-scorer-wrapper';

describe('<bowling-scorer>', () => {
  let bowlingScoreWrapper;

  beforeEach(async () => {
    const el = await fixture('<bowling-scorer></bowling-scorer>');
    bowlingScoreWrapper = new BowlingScorerWrapper(el);  
  });
  it('displays an initial score of 0', async () => {
    expect(bowlingScoreWrapper.score).to.eq('0');
  });
  it('has a text box', async () => {
    const el = await fixture('<bowling-scorer></bowling-scorer>');
    expect(el.shadowRoot.querySelector("input")).to.exist;
  });
  it('has a roll button', async () => {
    const el = await fixture('<bowling-scorer></bowling-scorer>');
    expect(el.shadowRoot.querySelector("button")).to.exist;
    expect(el.shadowRoot.querySelector("button").innerHTML).to.eq("Roll!");
  });
  it('updates the score after a roll', async () => {
    await bowlingScoreWrapper.roll("5");
    expect(bowlingScoreWrapper.score).to.eq('5');
  });
  it('calculates score after a roll', async () => {
    await bowlingScoreWrapper.roll("5");
    await bowlingScoreWrapper.roll("3");
    expect(bowlingScoreWrapper.score).to.eq('8');
  });

});
