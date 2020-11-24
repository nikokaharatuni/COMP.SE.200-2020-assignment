import isArguments from "../src/isArguments";

describe("5.21 isArguments", () => {
  it("0. should not tell an array is arguments", () => {
    expect(isArguments([1, 2, 3])).toBe(false);
  });

  it("1. should not tell a string is arguments", () => {
    expect(isArguments("123")).toBe(false);
  });

  it("2. should not tell a HTMLCOllection is arguments", () => {
    expect(isArguments(document.body.children)).toBe(false);
  });

  it("3. should not tell null is arguments", () => {
    expect(isArguments(null)).toBe(false);
  });

  it("4. should not tell undefined or missing value is arguments", () => {
    expect(isArguments(undefined)).toBe(false);
    expect(isArguments()).toBe(false);
  });

  it("5. should tell arguments is arguments", () => {
    expect(
      isArguments(
        (function() {
          return arguments;
        })()
      )
    ).toBe(true);
  });
});
