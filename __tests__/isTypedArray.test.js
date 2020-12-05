import isTypedArray from "../src/isTypedArray";

describe("5.32. isTypedArray", () => {
  it("0. should tell an Uint8Array is a typed array", () => {
    expect(isTypedArray(new Uint8Array())).toBe(true);
  });

  it("1. should not tell an array is a typed array", () => {
    expect(isTypedArray([])).toBe(false);
  });
});
