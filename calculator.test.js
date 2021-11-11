import { calculator } from './calculator';

describe('calculator', () => {
  it('Sums', () => {
    expect(calculator.sum(2, 2)).toBe(4);
  });
  it('Subtracts', () => {
    expect(calculator.substract(2, 2)).toBe(0);
  });
  it('Multiplies', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  it('Divides', () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });
});
