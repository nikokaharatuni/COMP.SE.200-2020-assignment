import every from "../src/every";

describe("5.18 every.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {every([true, 1, null], undefined);}).toThrow());

  it("1. should throw an exception for undefined value", () =>
  expect(() => {every(undefined, Boolean);}).toThrow());

  it("2. should throw an exception for undefined values", () =>
  expect(() => {every(undefined, undefined);}).toThrow());
});

describe("5.18 every.js: Valid inputs (Positive testing)", () => {
  it("10. All elements should not pass the predicate check", () =>
  expect(every([true, 1, null, 'yes'], Boolean)).toBe(false));

  it("11. All elements should pass the predicate check", () =>
  expect(every([true, false, true], Boolean)).toBe(false));

  it("12. All elements should not pass the predicate check", () =>
  expect(every([true, 1, null, 'yes'], Number)).toBe(false));

  it("13. All elements should pass the predicate check", () =>
  expect(every([1, 2, 3], Number)).toBe(true));

  it("14. All elements should not pass the predicate check", () =>
  expect(every([true, 1, null, 'yes'], String)).toBe(true));

  it("15. All elements should pass the predicate check", () =>
  expect(every(['yes','no'], String)).toBe(true));

  it("16. All elements should not pass the predicate check", () =>
  expect(every([], undefined)).toBe(true));
});