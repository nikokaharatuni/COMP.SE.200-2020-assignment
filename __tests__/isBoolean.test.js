import isBoolean from "../src/isBoolean";

describe("5.24 isBoolean", () => {
  it("0. should tell true is a boolean", () => {
    expect(isBoolean(true)).toBe(true);
  });

  it("1. should tell false is a boolean", () => {
    expect(isBoolean(false)).toBe(true);
  });

  it("2. should not tell null is a boolean", () => {
    expect(isBoolean(null)).toBe(false);
  });

  it("3. should not tell undefined or a missing value is a boolean", () => {
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean()).toBe(false);
  });

  it("4. should not tell an empty string is a boolean", () => {
    expect(isBoolean("")).toBe(false);
  });

  it("5. should not tell a string is a boolean", () => {
    expect(isBoolean("1")).toBe(false);
  });

  it("6. should not tell a number is a boolean", () => {
    expect(isBoolean(0)).toBe(false);
  });

  it("7. should tell a boolean object with a truthy value is a boolean", () => {
    expect(isBoolean(new Boolean("Software Testing"))).toBe(true);
  });

  it("8. should tell a boolean object with a falsy value is a boolean", () => {
    expect(isBoolean(new Boolean(""))).toBe(true);
  });
});
