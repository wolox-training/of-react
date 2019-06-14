import pow from '.';

describe('01 - matchers', () => {
  it('pow returns the power based on two numeric arguments', () => {
    expect(pow(2, 2)).toBe(4);
  });
  it('pow returns undefined if there is no arguments', () => {
    expect(pow()).toBeUndefined();
  });
  it('pow returns undefined if there is just one argument', () => {
    expect(pow(1)).toBeUndefined();
  });
  it('pow returns an array of power results if array of pairs are sent as arguments', () => {
    const arr1 = [1, 2];
    const arr2 = [4, 2];
    const arr3 = [3, 2];
    expect(pow(arr1, arr2, arr3)).toEqual([1, 16, 9]);
  });
  it('pow returns undefined in the right position of the result array if pair is not as expected', () => {
    const arr = [1, 2];
    const arrMoreElements = [1, 2, 3];
    const notArr = 1;
    expect(pow(arr, arrMoreElements, notArr)).toEqual([1, undefined, undefined]);
  });
});
