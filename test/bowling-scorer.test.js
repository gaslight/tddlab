import { html, fixture, expect } from '@open-wc/testing';

import '../src/bowling-scorer';

describe('<bowling-scorer>', () => {
  it('displays an initial score of 0', async () => {
    const el = await fixture('<bowling-scorer></bowling-scorer>');
    expect(el.shadowRoot.innerHTML).to.contain('Score: 0');
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
    const el = await fixture('<bowling-scorer></bowling-scorer>');
    const input = el.shadowRoot.querySelector("input");
    input.value = 5;
    const rollButton = el.shadowRoot.querySelector("button");
    rollButton.click();
    await el.updateComplete;
    expect(el.shadowRoot.innerHTML).to.include('Score: 5');
  });
  it('calculates score after a roll', async () => {
    const el = await fixture('<bowling-scorer></bowling-scorer>');
    const input = el.shadowRoot.querySelector("input");
    input.value = 5;
    const rollButton = el.shadowRoot.querySelector("button");
    rollButton.click();
    await el.updateComplete;
    input.value = 3;
    rollButton.click();
    await el.updateComplete;
    expect(el.shadowRoot.innerHTML).to.include('Score: 8');
  });

});
