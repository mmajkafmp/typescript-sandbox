import { add } from './math';

describe('math', () => {
  it('adds two numbers', () => {
    const expected = 4;
    const actual = add(1, 3);

    expect(actual).toEqual(expected);
  });
});
