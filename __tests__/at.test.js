import at from "../src/at";

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

describe("5.2. at.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {at(object, undefined);}).toThrow());

  it("1. should throw an exception for undefined value", () =>
  expect(() => {at(undefined, object);}).toThrow());

  it("2. should throw an exception for undefined values", () =>
  expect(() => {at(undefined, undefined);}).toThrow());
});

describe("5.2. at.js: Valid inputs (Positive testing)", () => {
  it("10. Should return correct return value [3,4]", () =>
  expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3,4]));

  it("11. Should return correct return value [3,4]", () =>
  expect(at(object, 'a[0].b.c', 'a[1]')).toStrictEqual([3,4]));

  it("12. Should return correct return value [3]", () =>
  expect(at(object, 'a[0].b.c')).toStrictEqual([3]));

  it("13. Should return correct return value [4]", () =>
  expect(at(object, 'a[1]')).toStrictEqual([4]));

  it("14. Should return correct return value [undefined]", () =>
  expect(at(object, 'z')).toStrictEqual([undefined]));
});