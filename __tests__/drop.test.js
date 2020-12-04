import drop from "../src/drop";

describe("5.15 drop.js: Invalid inputs (Negative testing)", () => {
  it("1. should throw an exception for undefined value", () =>
  expect(() => {drop(undefined, 1);}).toThrow());

  it("2. should throw an exception for undefined values", () =>
  expect(() => {drop(undefined, undefined);}).toThrow());

  it("6. should throw an exception for string value", () =>
  expect(() => {drop([1,2,3], "abc");}).toThrow());

  it("7. should throw an exception for string value", () =>
  expect(() => {drop("abc", 3);}).toThrow());

  it("8. should throw an exception for string values", () =>
  expect(() => {drop("abc", "abc");}).toThrow());

  it("9. should throw an exception for integer value", () =>
  expect(() => {drop(2, 2);}).toThrow());

  it("10. should throw an exception for negative number of elements (range error)", () =>
  expect(() => {drop([1,2,3], -1);}).toThrow());

  it("11. should throw an exception for too many elements (range error)", () =>
  expect(() => {drop([1,2,3], 4);}).toThrow());
});

describe("5.15 drop.js: Valid inputs (Positive testing)", () => {
  it("20. [1,2,3] sliced by zero elements is [1,2,3]", () =>
  expect(drop([1,2,3], 0)).toEqual([1,2,3]));

  it("21. [1,2,3] sliced by one elements is [2,3]", () =>
  expect(drop([1,2,3], 1)).toEqual([2,3]));

  it("22. [1,2,3] sliced by 2 elements is [3]", () =>
  expect(drop([1,2,3], 2)).toEqual([3]));

  it("23. [1,2,3] sliced by 3 elements is []", () =>
  expect(drop([1,2,3], 3)).toEqual([]));

  it("24. [1,2,3] sliced by undefined [2,3]", () =>
  expect(drop([1,2,3], undefined)).toEqual([2,3]));
});