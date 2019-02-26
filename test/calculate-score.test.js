import calculateScore from '../src/calculate-score';
import { expect } from '@open-wc/testing';

describe('calculateScore', () => {
  it('totals rolls', () => {
    expect(calculateScore([5, 3])).to.equal(8);
  });
});