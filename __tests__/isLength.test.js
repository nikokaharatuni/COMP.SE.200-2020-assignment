import isLength from "../src/isLength";

describe("5.28. isLength", () => {
  it("0. should tell number literal 0 is a valid array-like length", () => {
    expect(isLength(0)).toBe(true);
  });

  it("1. should not tell minimum numeric value is a valid array-like length", () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false);
  });

  it("2. should not tell Infinity is a valid array-like length", () => {
    expect(isLength(Infinity)).toBe(false);
  });

  it("3. should not tell a number looking string literal is a valid array-like length", () => {
    expect(isLength("1")).toBe(false);
  });

  it("4. should tell a number literal 1 is a valid array-like length", () => {
    expect(isLength(1)).toBe(true);
  });

  it("5. should not tell a negative number is a valid array-like length", () => {
    // Not mentioned in test plan!
    expect(isLength(-1)).toBe(false);
    expect(isLength(-Number.MIN_VALUE)).toBe(false);
  });
});
