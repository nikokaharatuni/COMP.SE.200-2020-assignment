import difference from "../src/difference";

describe("5.13 difference.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {difference([1,2,3], undefined);}).toThrow());

  it("1. should throw an exception for undefined value", () =>
  expect(() => {difference(undefined, [1,2,3]);}).toThrow());

  it("2. should throw an exception for undefined values", () =>
  expect(() => {difference(undefined, undefined);}).toThrow());

  it("6. should throw an exception for string value", () =>
  expect(() => {difference([1,2,3], "abc");}).toThrow());

  it("7. should throw an exception for string value", () =>
  expect(() => {difference("abc", [1,2,3]);}).toThrow());

  it("8. should throw an exception for string values", () =>
  expect(() => {difference("abc", "abc");}).toThrow());

  it("9. should throw an exception for integer value", () =>
  expect(() => {difference([1,2,3], 2);}).toThrow());

  it("10. should throw an exception for integer value", () =>
  expect(() => {difference(2, [1,2,3]);}).toThrow());

  it("11. should throw an exception for integer values", () =>
  expect(() => {difference(2, 2);}).toThrow());
});

describe("5.13 difference.js: Valid inputs (Positive testing)", () => {
  it("20. The difference between the arrays [1,2] and [2,3] is [1]", () =>
  expect(difference([1,2], [2,3])).toEqual([1]));

  it("21. The difference between the arrays [1,2] and [3,4] is [1,2]", () =>
  expect(difference([1,2], [3,4])).toEqual([1,2]));

  it("22. The difference between the arrays [1] and [1,2] is []", () =>
  expect(difference([1], [1,2])).toEqual([]));

  it("23. The difference between the arrays [1,2,3,4,5] and [1,2,3,4,5] is []", () =>
  expect(difference([1,2,3,4,5], [1,2,3,4,5])).toEqual([]));

  it("24. The difference between the arrays [] and [] is []", () =>
  expect(difference([], [])).toEqual([]));
});