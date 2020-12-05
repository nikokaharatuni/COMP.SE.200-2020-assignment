import slice from "../src/slice";

describe("5.36. slice (Negative testing)", () => {
  // TODO: These negative tests are failing.
  // The unit under test won't throw with invalid arguments.

  it("0. should throw with non-numeric start parameter", () => {
    expect(() => slice([], "0")).toThrow();
  });

  it("1. should throw with non-numeric start and end parameters", () => {
    expect(() => slice([], "0", "1")).toThrow();
  });

  it("2. should throw with an object given as the array", () => {
    expect(() => slice({})).toThrow();
  });

  it("3. should throw with a string given as the array", () => {
    expect(() => slice("abc")).toThrow();
  });
});

describe("5.36. slice (Positive testing)", () => {
  it("10. should correctly slice the array with a positive start number", () => {
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });

  it("11. should correctly slice the array with a positive start and end numbers", () => {
    expect(slice([1, 2, 3, 4], 2, 3)).toEqual([3]);
  });

  it("12. should correctly slice the array with a negative start number", () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
  });

  it("13. should correctly slice the array with a negative start and end numbers", () => {
    expect(slice([1, 2, 3, 4], -2, -1)).toEqual([3]);
  });
});
