import keys from "../src/keys";

describe("5.33 keys", () => {
  function Foo() {
    this.a = 1;
    this.b = 2;
  }

  Foo.prototype.c = 3;

  it("0. should return empty keys array for an empty object", () => {
    expect(keys({})).toEqual([]);
  });

  it("1. should return indeces for each character in a string literal", () => {
    expect(keys("hi")).toEqual(["0", "1"]);
  });

  it("2. should return keys only for own properties, not prototype properties", () => {
    expect(keys(new Foo())).toEqual(["a", "b"]);
  });

  it("3. should return keys for explicit object properties", () => {
    expect(
      keys({
        a: 1,
        b: 2
      })
    ).toEqual(["a", "b"]);
  });

  it("4. should not return keys for a constructor wich assigns properties and prototype properties", () => {
    expect(keys(Foo)).toEqual([]);
  });
});
