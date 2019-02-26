import calculateScore from '../src/calculate-score';
import { expect } from '@open-wc/testing';

describe('calculateScore', () => {
  it('totals rolls', () => {
    expect(calculateScore([5, 3])).to.equal(8);
  });
  it('handles spares', () => {
    expect(calculateScore([5, 3, 5])).to.equal(13);
    expect(calculateScore([5, 5, 5])).to.equal(20);
  });
});