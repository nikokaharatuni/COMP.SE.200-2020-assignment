import { jest } from "@jest/globals";

import toFinite from "../src/toFinite";

describe("5.38. toFinite", () => {
  it("0. should work with regular number literal", () => {
    expect(toFinite(3.2)).toBe(3.2);
  });

  it("1. should work with the smallest positive finite number", () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
  });

  it("2. should parse finite number from a string", () => {
    expect(toFinite("3.2")).toBe(3.2);
  });

  it("3. should default to 0 when the value cannot be parsed into a number", () => {
    expect(toFinite(null)).toBe(0);
  });

  it("4. should turn Infinity into the greatest finite number", () => {
    expect(toFinite(Infinity)).toBe(Number.MAX_VALUE);
  });
});
