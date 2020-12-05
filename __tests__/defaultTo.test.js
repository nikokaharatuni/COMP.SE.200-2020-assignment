import defaultTo from "../src/defaultTo";

describe("5.11. defaultTo.js: Valid inputs (Positive testing)", () => {
  it("0. The default value 10 should be returned if the input is undefined", () =>
  expect(defaultTo(undefined, 10)).toBe(10));

  it("1. The default value 10 should not be returned if the input is 123", () =>
  expect(defaultTo(123, 10)).toBe(123));

  it("2. The default value 10 should not be returned if the input string is 123", () =>
  expect(defaultTo("123", 10)).toBe("123"));

  it("3. The default value 10 should not be returned if the input string is 1", () =>
  expect(defaultTo('1', 10)).toBe('1'));

  it("4. The default value 10 should not be returned if the input is 12.3", () =>
  expect(defaultTo(12.3, 10)).toBe(12.3));

  it("5. The default value undefined should be returned if the input is undefined", () =>
  expect(defaultTo(undefined, undefined)).toBe(undefined));
});