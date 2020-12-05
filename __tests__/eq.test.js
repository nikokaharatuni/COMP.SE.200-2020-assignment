import eq from "../src/eq";

describe("5.17. eq.js: Valid inputs (Positive testing)", () => {
  it("0. 1 and 1 are equal", () =>
  expect(eq(1, 1)).toBe(true));

  it("1. 1 and 2 are not equal", () =>
  expect(eq(1, 2)).toBe(false));

  it("2. 1.0 and 1.0 are equal", () =>
  expect(eq(1.0, 1.0)).toBe(true));
  
  it("3. 1.0 and 2.0 are not equal", () =>
  expect(eq(1.0, 2.0)).toBe(false));

  it("4. abc and abc are equal", () =>
  expect(eq("abc", "abc")).toBe(true));

  it("5. abc and ab are not equal", () =>
  expect(eq("abc", "ab")).toBe(false));

  it("6. abc and bc are not equal", () =>
  expect(eq("abc", "bc")).toBe(false));

  it("7. a and a are equal", () =>
  expect(eq('a', 'a')).toBe(true));

  it("8. a and b are not equal", () =>
  expect(eq('a', 'b')).toBe(false));

  it("9. undefined and undefined are equal", () =>
  expect(eq(undefined, undefined)).toBe(true));

  it("10. undefined and 1 are not equal", () =>
  expect(eq(undefined, 1)).toBe(false));

  it("11. NaN and NaN are equal", () =>
  expect(eq(NaN, NaN)).toBe(true));

  it("12. 1 and NaN are not equal", () =>
  expect(eq(1, NaN)).toBe(false));
});