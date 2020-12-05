import endsWith from "../src/endsWith";

describe("5.16. endsWith.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {endsWith("abc", undefined, 3);}).toThrow());

  it("1. should throw an exception for undefined values", () =>
  expect(() => {endsWith(undefined, undefined, undefined);}).toThrow());

  it("2. should throw an exception for too high index (range error)", () =>
  expect(() => {endsWith("abc", "c", 4);}).toThrow());

  it("4. should throw an exception for negative index (range error)", () =>
  expect(() => {endsWith("abc", "c", -1);}).toThrow());
});

describe("5.16. endsWith.js: Valid inputs (Positive testing)", () => {
  it("10. abc ends with c when the number is undefined", () =>
  expect(endsWith("abc", "c", undefined)).toBe(true));

  it("11. abc ends with c when the number is 3", () =>
  expect(endsWith("abc", "c", 3)).toBe(true));

  it("12. abc does not end with a when the number is 2", () =>
  expect(endsWith("abc", "a", 3)).toBe(false));

  it("13. abc does not end with a when the number is undefined", () =>
  expect(endsWith("abc", "a", undefined)).toBe(false));

  it("14. abc ends with abc when the number is 1", () =>
  expect(endsWith("abc", "a", 1)).toBe(true));

  it("15. abcdef does not end with ed when the number is 5", () =>
  expect(endsWith("abcdef", "ed", 5)).toBe(false));

  

});