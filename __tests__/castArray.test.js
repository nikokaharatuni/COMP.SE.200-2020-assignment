import castArray from "../src/castArray";

describe("5.5. castArray.js: Valid inputs (Positive testing)", () => {
    it("1. With 1 should be returned [1]", () =>
    expect(castArray(1)).toStrictEqual([1]));

    it("2. With { 'a': 1 } should be returned [{ 'a': 1 }]", () =>
    expect(castArray({ 'a': 1 })).toStrictEqual([{ 'a': 1 }]));

    it("3. With 'abc' should be returned ['abc']", () =>
    expect(castArray('abc')).toStrictEqual(['abc']));

    it("4. With null should be returned [null]", () =>
    expect(castArray(null)).toStrictEqual([null]));

    it("5. With undefined should be returned [undefined]", () =>
    expect(castArray(undefined)).toStrictEqual([undefined]));

    it("6. With  should be returned []", () =>
    expect(castArray()).toStrictEqual([]));
  });