import isObjectLike from "../src/isObjectLike";

describe("5.30 isObjectLike", () => {
  it("0. should tell an object is object-like", () => {
    expect(isObjectLike({})).toBe(true);
  });

  it("1. should tell an array is object-like", () => {
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });

  it("2. should not tell Function object is object-like", () => {
    expect(isObjectLike(Function)).toBe(false);
  });

  it("3. should tell a number object is object-like", () => {
    expect(isObjectLike(new Number(1))).toBe(true);
  });

  it("4. should not tell a number literal is object-like", () => {
    expect(isObjectLike(1)).toBe(false);
  });

  it("5. should not tell null value is object-like", () => {
    expect(isObjectLike(null)).toBe(false);
  });

  it("6. should not tell Number object is object-like", () => {
    expect(isObjectLike(Number)).toBe(false);
  });
});
