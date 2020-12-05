import divide from "../src/divide";

describe("5.14. divide.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {divide(1, undefined);}).toThrow());

  it("1. should throw an exception for undefined value", () =>
  expect(() => {divide(undefined, 1);}).toThrow());

  it("2. should throw an exception for undefined values", () =>
  expect(() => {divide(undefined, undefined);}).toThrow());

  it("6. should throw an exception for string value", () =>
  expect(() => {divide(3, "abc");}).toThrow());

  it("7. should throw an exception for string value", () =>
  expect(() => {divide("abc", 3);}).toThrow());

  it("8. should throw an exception for string values", () =>
  expect(() => {divide("abc", "abc");}).toThrow());

  it("9. should throw an exception for dividing by zero", () =>
  expect(() => {divide(5, 0);}).toThrow());
});

describe("5.14. divide.js: Valid inputs (Positive testing)", () => {
  it("10. 0 divided by 1.1 is 0", () =>
  expect(divide(0, 1.1)).toBeCloseTo(0));

  it("11. -1.1 divided by -1 is 1.1", () =>
  expect(divide(-1.1, -1)).toBeCloseTo(1.1));

  it("12. 1 divided by -1.1 is -0.9091", () =>
  expect(divide(1, -1.1)).toBeCloseTo(-0.9091));

  it("13. 6 divided by 4 is 1.5", () =>
  expect(divide(6, 4)).toBeCloseTo(1.5));
});