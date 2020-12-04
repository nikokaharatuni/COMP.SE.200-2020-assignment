import toString from "../src/toString";

describe("5.41 toString", () => {
  it("0. should turn positive number to string", () => {
    expect(toString(3.2)).toBe("3.2");
  });

  it("1. should keep the sign for -0 when converting to string", () => {
    expect(toString(-0)).toBe("-0");
  });

  it("2. should turn arrays to a string of comma-separated members", () => {
    expect(toString([1, 2, 3])).toBe("1,2,3");
  });

  it("3. should default to empty string with null", () => {
    expect(toString(null)).toBe("");
  });

  it("4. should default to empty string with undefined", () => {
    expect(toString(undefined)).toBe("");
  });

  it("5. should not alter strings", () => {
    expect(toString("123")).toBe("123");
  });

  it("6. should not add the sign for 0 converted to string", () => {
    expect(toString(0)).toBe("0");
  });
});
