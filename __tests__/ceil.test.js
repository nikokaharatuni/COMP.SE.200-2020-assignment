import ceil from "../src/ceil";

describe("5.6. ceil.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {ceil(undefined, 1);}).toThrow());

  it("1. should throw an exception for undefined values", () =>
  expect(() => {ceil(undefined, undefined);}).toThrow());

  it("5. should throw an exception for string value", () =>
  expect(() => {ceil(3,"abc");}).toThrow());

  it("6. should throw an exception for string value", () =>
  expect(() => {ceil("abc",3);}).toThrow());

  it("7. should throw an exception for string values", () =>
  expect(() => {ceil("abc", "abc");}).toThrow());

  it("8. should throw an exception for double values", () =>
  expect(() => {ceil(3, 1.1);}).toThrow());
});

describe("5.6. ceil.js: Valid inputs (Positive testing)", () => {
  it("10. 4.006 should be ceiled up to 5 with undefined precision", () =>
  expect(ceil(4.006, undefined)).toBe(5));

  it("11. 6.004 should be ceiled up to 6.01 with precision of 2 decimals", () =>
  expect(ceil(6.004, 2)).toBe(6.01));

  it("12. 6040 should be ceiled up to 6100 with precision of -2 decimals", () =>
  expect(ceil(6040, -2)).toBe(6100));

  it("13. 0 should be ceiled up to 0.00 with precision of 2 decimals", () =>
  expect(ceil(0, 2)).toBe(0.0));

  it("14. 6040 should be ceiled up to 1 with precision of -5 decimals", () =>
  expect(ceil(6040, -5)).toBe(100000));

  it("15. 123 should be ceiled up to 123 with precision of 0 decimals", () =>
  expect(ceil(123, 0)).toBe(123));
});