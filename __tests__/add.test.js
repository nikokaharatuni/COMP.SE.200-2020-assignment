import add from "../src/add";

describe("5.1 add.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {add(1, undefined);}).toThrow());

  it("1. should throw an exception for undefined value", () =>
  expect(() => {add(undefined, 1);}).toThrow());

  it("2. should throw an exception for undefined values", () =>
  expect(() => {add(undefined, undefined);}).toThrow());

  it("6. should throw an exception for string value", () =>
  expect(() => {add(3, "abc");}).toThrow());

  it("7. should throw an exception for string value", () =>
  expect(() => {add("abc", 3);}).toThrow());

  it("8. should throw an exception for string values", () =>
  expect(() => {add("abc", "abc");}).toThrow());
});

describe("5.1 add.js: Valid inputs (Positive testing)", () => {
  it("10. 0 + 1.1 should be 1.1", () =>
  expect(add(0, 1.1)).toBe(1.1));

  it("11. 0.0 + 0 should be 0.0", () =>
  expect(add(0.0, 0)).toBe(0.0));

  it("12. -1 + 0.0 should be -1.0", () =>
  expect(add(-1, 0.0)).toBe(-1.0));

  it("13. -1.1 + -1 should be -2.1", () =>
  expect(add(-1.1, -1)).toBe(-2.1));

  it("14. 1 + -1.1 should be -0.1", () =>
  expect(add(1, -1.1)).toBeCloseTo(-0.1));

  it("15. 1.1 + -1 should be 2.1", () =>
  expect(add(1.1, 1)).toBe(2.1));
});