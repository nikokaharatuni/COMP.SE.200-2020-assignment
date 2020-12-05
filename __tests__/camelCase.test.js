import camelCase from "../src/camelCase";

describe("5.3. camelCase.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {camelCase(undefined);}).toThrow());

  it("1. should throw an exception for char value", () =>
  expect(() => {camelCase('a');}).toThrow());

  it("3. should throw an exception for integer value", () =>
  expect(() => {camelCase(123);}).toThrow());
});

describe("5.3. camelCase.js: Valid inputs (Positive testing)", () => {
  it("10. With an empty string should be returned empty string", () =>
  expect(camelCase("")).toBe(""));

  it("11. With a should be returned a", () =>
  expect(camelCase("a")).toBe("a"));

  it("12. Whit 123 should be returned 123", () =>
  expect(camelCase("123")).toBe("123"));

  it("13. With Test Case should be returned testCase", () =>
  expect(camelCase("Test Case")).toBe("testCase"));

  it("14. With —test-case— should be returned testCase", () =>
  expect(camelCase("—test-case—")).toBe("testCase"));

  it("15. With __TEST_CASE__ should be returned testcase", () =>
  expect(camelCase("__TEST_CASE__")).toBe("testCase"));

  it("16. With testcase should be returned testcase", () =>
  expect(camelCase("testcase")).toBe("testcase"));
});