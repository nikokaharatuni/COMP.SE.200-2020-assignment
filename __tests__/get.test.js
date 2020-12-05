import get from "../src/get";

const obj = { 'a': [{ 'b': { 'c': 3 } }] };

describe("5.20. get.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {get(undefined, ['a', '0', 'b', 'c'], 'default');}).toThrow());

  it("1. should throw an exception for undefined value", () =>
  expect(() => {get(obj, undefined, 'default');}).toThrow());

  it("2. should throw an exception for undefined values", () =>
  expect(() => {get(undefined, undefined, undefined);}).toThrow());
});

describe("5.20. get.js: Valid inputs (Positive testing)", () => {
  it("10. See test plan documentation table 5.20 get.js", () =>
  expect(get(obj, 'a[0].b.c', undefined)).toBe(3));

  it("11. See test plan documentation table 5.20 get.js", () =>
  expect(get(obj, ['a', '0', 'b', 'c'], undefined)).toBe(3));

  it("12. See test plan documentation table 5.20 get.js", () =>
  expect(get(obj, 'a.b.c', 'default')).toBe('default'));
});