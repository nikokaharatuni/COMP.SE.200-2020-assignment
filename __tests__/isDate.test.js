import isDate from "../src/isDate";

describe("5.26. isDate", () => {
  it("0. should tell a date is a date", () => {
    expect(isDate(new Date())).toBe(true);
  });

  it("1. should not tell a string timestamp is a date", () => {
    expect(isDate("Mon April 23 2012")).toBe(false);
  });

  it("2. should not tell a number is a date", () => {
    expect(isDate(1601381729834)).toBe(false);
  });

  it("3. should not tell an object with getDate method is a date", () => {
    expect(
      isDate({
        getDate() {
          return 1;
        }
      })
    ).toBe(false);
  });
});
