import words from "../src/words";

describe("5.43. words", () => {
  it("1. should not detect special characters as word characters by default", () => {
    expect(words("fred, barney, & pebbles")).toEqual([
      "fred",
      "barney",
      "pebbles"
    ]);
  });

  it("2. should respect the given pattern when detecting words", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).toEqual([
      "fred",
      "barney",
      "&",
      "pebbles"
    ]);
  });

  it("3. should not split emojis", () => {
    expect(words("😳")).toEqual(["😳"]);
  });

  it("3. should work correctly also with scandic letters", () => {
    expect(words("äkäslompolo")).toEqual(["äkäslompolo"]);
  });
  it("4. should default to empty array with null", () => {
    expect(words(null)).toEqual([]);
  });

  it("5. should default to empty array", () => {
    expect(words()).toEqual([]);
  });
});
