import chunk from "../src/chunk";

describe("5.7 chunk.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {chunk(undefined, 1);}).toThrow());

  it("1. should throw an exception for undefined values", () =>
  expect(() => {chunk(undefined, undefined);}).toThrow());

  it("2. should throw an exception for char value", () =>
  expect(() => {chunk(['a', 'b', 'c', 'd'], '2');}).toThrow());

  it("3. should throw an exception for char value", () =>
  expect(() => {chunk('2', 2);}).toThrow());

  it("4. should throw an exception for char values", () =>
  expect(() => {chunk('2', '2');}).toThrow());

  it("5. should throw an exception for string value", () =>
  expect(() => {chunk(3, "abc");}).toThrow());

  it("6. should throw an exception for string value", () =>
  expect(() => {chunk("abc", 3);}).toThrow());

  it("7. should throw an exception for string value", () =>
  expect(() => {chunk("abc", "abc");}).toThrow());

  it("8. should throw an exception for zero value", () =>
  expect(() => {chunk(['a', 'b', 'c', 'd'], 0);}).toThrow());

  it("9. should throw an exception for negative value", () =>
  expect(() => {chunk(['a', 'b', 'c', 'd'], -1);}).toThrow());

  it("10. should throw an exception for too large value", () =>
  expect(() => {chunk(['a', 'b', 'c', 'd'], 5);}).toThrow());
});

describe("5.7 chunk.js: Valid inputs (Positive testing)", () => {
  it("20. See test plan documentation table 5.7 chunk.js", () =>
  expect(chunk(['a', 'b', 'c', 'd'], 1)).toBe([['a'], ['b'], ['c'], ['d']]));

  it("21. See test plan documentation table 5.7 chunk.js", () =>
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toBe([['a', 'b'], ['c', 'd']]));

  it("22. See test plan documentation table 5.7 chunk.js", () =>
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toBe([['a', 'b', 'c'], ['d']]));

  it("23. See test plan documentation table 5.7 chunk.js", () =>
  expect(chunk([1, 2, 3, 4], 2)).toBe([[1,2],[3,4]]));

  it("24. See test plan documentation table 5.7 chunk.js", () =>
  expect(chunk(["ab", "cd", "ef"], 2)).toBe([["ab", "cd", "ef"]]));
});