import upperFirst from "../src/upperFirst";

describe("5.42. upperFirst", () => {
  it("0. should capitalize the first character when it's alphabetical", () => {
    expect(upperFirst("fred")).toBe("Fred");
  });

  it("1. should not capitalize any character when the first character is numeric", () => {
    expect(upperFirst("123fred")).toBe("123fred");
  });

  it("2. should not change the case of any character when the first character is already capitalized", () => {
    expect(upperFirst("FRED")).toBe("FRED");
  });

  it("3. should work correctly also with the first character being an uncapitalized scandic letter", () => {
    expect(upperFirst("äkäslompolo")).toBe("Äkäslompolo");
  });
  it("4. should default to empty string with null", () => {
    expect(upperFirst(null)).toBe("");
  });

  it("5. should default to empty string", () => {
    expect(upperFirst()).toBe("");
  });
});
