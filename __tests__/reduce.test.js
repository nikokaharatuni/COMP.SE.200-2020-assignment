import { jest } from "@jest/globals";

import reduce from "../src/reduce";

const sum = jest.fn(function(a, b) {
  return a + b;
});

describe("5.35. reduce (Negative testing)", () => {
  // TODO: These negative tests are failing.
  // The unit under test won't throw with invalid arguments.

  it("0. should throw with undefined collection", () => {
    sum.mockClear();
    expect(() => reduce(undefined, sum)).toThrow();
  });

  it("1. should throw with undefined iteratee", () => {
    expect(() => reduce([], undefined)).toThrow();
  });

  it("2. should throw with an object given as the iteratee", () => {
    expect(() => reduce([], {})).toThrow();
  });
});

describe("5.35. reduce (Positive testing)", () => {
  it("10. should sum array members and accumulator correctly", () => {
    sum.mockClear();
    expect(reduce([1, 2], sum, 0)).toBe(3);
    expect(sum).toHaveBeenCalledTimes(2); // Not mentioned in the test plan!
  });

  it("11. should behave correctly when collection is an object", () => {
    const iteratee = jest.fn((result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    });
    expect(reduce({ a: 1, b: 2, c: 1 }, iteratee, {})).toEqual({
      "1": ["a", "c"],
      "2": ["b"]
    });
    expect(iteratee).toHaveBeenCalledTimes(3); // Not mentioned in the test plan!
  });
});
