import isEmpty from "../src/isEmpty";

describe("5.27. isEmpty", () => {
  it("0. should tell null is empty", () => {
    expect(isEmpty(null)).toBe(true);
  });

  it("1. should tell a literal true is empty", () => {
    expect(isEmpty(true)).toBe(true);
  });

  it("2. should tell a number is empty", () => {
    expect(isEmpty(1)).toBe(true);
  });

  it("3. should not tell a non-empty array is empty", () => {
    expect(isEmpty([])).toBe(true); // Not mentioned in the plan!
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it("4. should not tell a non-empty string is empty", () => {
    expect(isEmpty("")).toBe(true); // Not mentioned in the plan!
    expect(isEmpty("abc")).toBe(false);
  });

  it("5. should not tell an object with a property is empty", () => {
    expect(isEmpty({})).toBe(true); // Not mentioned in the plan!
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it("6. should not tell an object with property length being 0 is empty", () => {
    expect(isEmpty({ length: 0 })).toBe(false);
  });

  it("7. should not tell an object with property size being 0 is empty", () => {
    expect(isEmpty({ size: 0 })).toBe(false);
  });

  it("8. should tell when a Map is empty", () => {
    // Not mentioned in the plan!
    const map = new Map();
    expect(isEmpty(map)).toBe(true);
    map.set("foo", "bar");
    expect(isEmpty(map)).toBe(false);
    map.delete("foo");
    expect(isEmpty(map)).toBe(true);
  });

  it("9. should tell when a Set is empty", () => {
    // Not mentioned in the plan!
    const set = new Set();
    expect(isEmpty(set)).toBe(true);
    set.add("foo");
    expect(isEmpty(set)).toBe(false);
    set.delete("foo");
    expect(isEmpty(set)).toBe(true);
  });

  it("10. should tell when a prototype is empty", () => {
    // Not mentioned in the plan!
    function Foo() {
      this.testings = 123;
    }
    expect(isEmpty(Foo.prototype)).toBe(true);

    Foo.prototype.bar = 42;
    expect(isEmpty(Foo.prototype)).toBe(false);
  });
});
