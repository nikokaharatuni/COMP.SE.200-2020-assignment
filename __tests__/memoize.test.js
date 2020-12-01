import { jest } from "@jest/globals";

import memoize from "../src/memoize";

const createObj = jest.fn(function createObj(value) {
  return { a: value };
});
const memCreateObj = memoize(createObj);
const firstResult = memCreateObj(1);
const secondResult = memCreateObj(2);

describe("5.37 memoized function (Positive testing)", () => {
  it("0. should correctly return the last memoized value and not call the original function", () => {
    expect(memCreateObj(2)).toBe(secondResult);
    expect(createObj).toHaveBeenCalledTimes(2);
    expect(createObj).toHaveBeenLastCalledWith(2);
  });

  it("1. should correctly return a previous memoized value and not call the original function", () => {
    expect(memCreateObj(1)).toBe(firstResult);
    expect(createObj).toHaveBeenCalledTimes(2);
    expect(createObj).toHaveBeenLastCalledWith(2);
  });

  it("2. should call the memoized function with a new input", () => {
    expect(memCreateObj(3)).toEqual({ a: 3 });
    expect(createObj).toHaveBeenCalledTimes(3);
    expect(createObj).toHaveBeenLastCalledWith(3);
  });
});

describe("5.37 memoize function (Negative testing)", () => {
  it("10. should throw without arguments", () => {
    expect(() => memoize()).toThrow();
  });

  it("11. should throw when func is not a function", () => {
    expect(() => memoize(1)).toThrow();
  });
});
