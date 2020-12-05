import toNumber from "../src/toNumber";

describe("5.40. toNumber", () => {
  it("0. should pass regular number literals as they are", () => {
    expect(toNumber(3.2)).toBe(3.2);
  });

  it("1. should pass the smallest positive finite number as it is", () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
  });

  it("2. should parse a number from a string", () => {
    expect(toNumber("3.2")).toBe(3.2);
  });

  it("3. should default to 0 when the value cannot be parsed into a number", () => {
    expect(toNumber(null)).toBe(0);
  });

  it("4. should parse Infinity as Infinity", () => {
    expect(toNumber(Infinity)).toBe(Infinity);
  });
});
