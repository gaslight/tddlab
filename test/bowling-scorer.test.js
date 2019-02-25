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

});
