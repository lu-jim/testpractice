import { stringLength, reverseString } from './testPractice.js';

describe('String Length', function () {
  it('Too short alert', () => {
    expect(() => stringLength('')).toThrow('String too short');
  });
  it('Too long alert', () => {
    expect(() => stringLength('012345678901')).toThrow('String too long');
  });

  it('Ideal input', () => {
    expect(stringLength('1')).toBe(1);
  });
});

describe('Reverse String', function () {
  it('Inverts', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});
