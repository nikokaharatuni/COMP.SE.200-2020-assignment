import capitalize from "../src/capitalize";

describe("5.4. capitalize.js: Invalid inputs (Negative testing)", () => {
    it("0. should throw an exception for undefined value", () =>
    expect(() => {capitalize(undefined);}).toThrow());
  
    it("3. should throw an exception for integer value", () =>
    expect(() => {capitalize(123);}).toThrow());
});

describe("5.4. capitalize.js: Valid inputs (Positive testing)", () => {
    it("10. With an empty string should be returned empty string", () =>
    expect(capitalize("")).toBe(""));

    it("11. With a should be returned A", () =>
    expect(capitalize("a")).toBe("A"));

    it("12. With 123 should be returned 123", () =>
    expect(capitalize("123")).toBe("123"));

    it("13. With Test Case should be returned Test case", () =>
    expect(capitalize("Test Case")).toBe("Test case"));

    it("14. With testcase should be returned Testcase", () =>
    expect(capitalize("testcase")).toBe("Testcase"));

    it("15. With TeSt CaSe should be returned Test case", () =>
    expect(capitalize("TeSt CaSe")).toBe("Test case"));

    it("16. With Testcase should be returned Testcase", () =>
    expect(capitalize("Testcase")).toBe("Testcase"));
});