import toInteger from "../src/toInteger";

describe("5.39. toInteger", () => {
  it("0. should round decimals correctly to integer", () => {
    expect(toInteger(3.2)).toBe(3);
  });

  it("1. should work with the smallest positive finite number and round it to 0", () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });

  it("2. should parse number from a string and round it to integer", () => {
    expect(toInteger("3.2")).toBe(3);
  });

  it("3. should default to 0 when the value cannot be parsed into a number", () => {
    expect(toInteger(null)).toBe(0);
  });

  it("4. should turn Infinity into the greatest number", () => {
    expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
  });
});
