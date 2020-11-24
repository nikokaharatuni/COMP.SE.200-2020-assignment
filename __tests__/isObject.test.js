import isObject from "../src/isObject";

describe("5.29 isObject", () => {
  it("0. should tell an object is an object", () => {
    expect(isObject({})).toBe(true);
  });

  it("1. should tell an array is an object", () => {
    expect(isObject([1, 2, 3])).toBe(true);
  });

  it("2. should tell Function is an object", () => {
    expect(isObject(Function)).toBe(true);
  });

  it("3. should tell a number object is an object", () => {
    expect(isObject(new Number(1))).toBe(true);
  });

  it("4. should not tell a number literal is an object", () => {
    expect(isObject(1)).toBe(false);
  });

  it("5. should not tell null value is an object", () => {
    expect(isObject(null)).toBe(false);
  });

  it("6. should tell Number constructor is an object", () => {
    expect(isObject(Number)).toBe(true);
  });
});
