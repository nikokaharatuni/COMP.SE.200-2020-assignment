import clamp from "../src/clamp";

describe("5.8 clamp.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {clamp(5, -10, undefined);}).toThrow());

  it("1. should throw an exception for undefined value", () =>
  expect(() => {clamp(5, undefined, 10);}).toThrow());

  it("2. should throw an exception for undefined value", () =>
  expect(() => {clamp(undefined, -10, 10);}).toThrow());

  it("3. should throw an exception for undefined values", () =>
  expect(() => {clamp(undefined, undefined, undefined);}).toThrow());

  it("4. should throw an exception for string value", () =>
  expect(() => {clamp(5, -10, "10");}).toThrow());

  it("5. should throw an exception for string value", () =>
  expect(() => {clamp(5, "-10", 10);}).toThrow());

  it("6. should throw an exception for string value", () =>
  expect(() => {clamp("5", -10, 10);}).toThrow());

  it("7. should throw an exception for string values", () =>
  expect(() => {clamp("5", "-10", "10");}).toThrow());
});

describe("5.8 clamp.js: Valid inputs (Positive testing)", () => {
  it("20. number 0 is between the bounds -5 - 5", () =>
  expect(clamp(0, -5, 5)).toBe(0));

  it("21. number -6 is smaller than the lower bound -5", () =>
  expect(clamp(-6, -5, 5)).toBe(-5));

  it("22. number -5 is equal to the lower bound -5", () =>
  expect(clamp(-5, -5, 5)).toBe(-5));

  it("23. number 5 is equal to the upper bound 5", () =>
  expect(clamp(5, -5, 5)).toBe(5));

  it("24. number 6 is bigger than the upper bound 5", () =>
  expect(clamp(6, -5, 5)).toBe(5));

  it("25. number 2 is between the bounds -5 - 5", () =>
  expect(clamp(2, -5, 5)).toBe(2));
});