import isArrayLikeObject from "../src/isArrayLikeObject";

describe("5.23. isArrayLikeObject", () => {
  it("0. should tell an array is array like object", () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true);
  });

  it("1. should not tell a string is array like object", () => {
    expect(isArrayLikeObject("123")).toBe(false);
  });

  it("2. should tell a HTMLCOllection is array like object", () => {
    expect(isArrayLikeObject(document.body.children)).toBe(true);
  });

  it("3. should not tell null is array like object", () => {
    expect(isArrayLikeObject(null)).toBe(false);
  });

  it("4. should not tell undefined or missing value is array like object", () => {
    expect(isArrayLikeObject(undefined)).toBe(false);
    expect(isArrayLikeObject()).toBe(false); // Not mentioned in the plan!
  });

  it("5. should not tell Function constructor is array like object", () => {
    expect(isArrayLikeObject(Function)).toBe(false);
  });

  it("5. should not tell a number is array like object", () => {
    expect(isArrayLikeObject(123)).toBe(false);
  });
});
