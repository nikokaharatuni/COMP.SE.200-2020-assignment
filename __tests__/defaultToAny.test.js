import defaultToAny from "../src/defaultToAny";
import defaultTo from "/../src/defaultTo";

describe("5.12 defaultToAny.js: Valid inputs (Positive testing)", () => {
  it("0. No default value should be returned with input 1", () =>
  expect(defaultToAny(1, 10, 20)).toBe(1));

  it("1. The first default value should be returned with input undefined", () =>
  expect(defaultToAny(undefined, 10, 20)).toBe(10));

  it("2. The second default value should be returned if the first default value is null and the given input is undefined", () =>
  expect(defaultToAny(undefined, null, 20)).toBe(20));

  it("3. The last default value should be returned if the default values are not correct and the given input is undefined", () =>
  expect(defaultToAny(undefined, null, NaN)).toBe(NaN));
});