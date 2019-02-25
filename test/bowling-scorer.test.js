import { html, fixture, expect } from '@open-wc/testing';

import '../src/bowling-scorer';

describe('<bowling-scorer>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<bowling-scorer></bowling-scorer>');
    expect(el.title).to.equal('open-wc');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <bowling-scorer title="different"></bowling-scorer>
    `);
    expect(el.title).to.equal('different');
  });
});
