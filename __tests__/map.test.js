import { jest } from "@jest/globals";

import map from "../src/map";

describe("5.34 map (Negative testing)", () => {
  // TODO: These negative tests are failing.
  // The unit under test won't throw with invalid arguments.

  it("0. should throw with undefined array", () => {
    expect(() => map(undefined, x => x)).toThrow();
  });

  it("1. should throw with undefined iteratee", () => {
    expect(() => map([], undefined)).toThrow();
  });

  it("2. should throw with an object given as the array", () => {
    expect(() => map({}, x => x)).toThrow();
  });

  it("3. should throw with an object given as the iteratee", () => {
    expect(() => map([], {})).toThrow();
  });
});

describe("5.34 map (Positive testing)", () => {
  it("10. should map empty array to empty array", () => {
    const iteratee = jest.fn(x => x);
    expect(map([], iteratee)).toEqual([]);
    expect(iteratee).toHaveBeenCalledTimes(0); // Not mentioned in the test plan!
  });

  it("11. should correctly map the array with identity function as iteratee", () => {
    const iteratee = jest.fn(x => x);
    expect(map([1, 2, 3], iteratee)).toEqual([1, 2, 3]);
    expect(iteratee).toHaveBeenCalledTimes(3); // Not mentioned in the test plan!
  });

  it("12. should correctly map the array with iteratee adding 1 to each member", () => {
    const plusOne = jest.fn(x => x + 1);
    expect(map([1, 2, 3], plusOne)).toEqual([2, 3, 4]);
    expect(plusOne).toHaveBeenCalledTimes(3); // Not mentioned in the test plan!
  });

  it("13. should get give index as an argument for the iteratee function", () => {
    const indexMapper = jest.fn((_value, index) => index);
    expect(map([42, 42, 42], indexMapper)).toEqual([0, 1, 2]);
    expect(indexMapper).toHaveBeenCalledTimes(3); // Not mentioned in the test plan!
  });
});
