import isArrayLike from "../src/isArrayLike";

describe("5.22 isArrayLike", () => {
  it("0. should tell an array is array like", () => {
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });

  it("1. should tell a string is array like", () => {
    expect(isArrayLike("123")).toBe(true);
  });

  it("2. should tell a HTMLCOllection is array like", () => {
    expect(isArrayLike(document.body.children)).toBe(true);
  });

  it("3. should not tell null is array like", () => {
    expect(isArrayLike(null)).toBe(false);
  });

  it("4. should not tell undefined or missing value is array like", () => {
    expect(isArrayLike(undefined)).toBe(false);
    expect(isArrayLike()).toBe(false);
  });

  it("5. should not tell Function constructor is array like", () => {
    expect(isArrayLike(Function)).toBe(false);
  });

  it("5. should not tell a number is array like", () => {
    expect(isArrayLike(123)).toBe(false);
  });
});
