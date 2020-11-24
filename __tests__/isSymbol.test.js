import isSymbol from "../src/isSymbol";

describe("5.31 isSymbol", () => {
  it("0. should tell an iterator is a symbol", () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });

  it("1. should not tell a string literal is a symbol", () => {
    expect(isSymbol("123")).toBe(false);
  });
});
