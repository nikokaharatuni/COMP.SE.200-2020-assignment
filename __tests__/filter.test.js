import filter from "../src/filter";

const users= Object.freeze([{ 'user': 'barney', 'active': true },
 { 'user': 'fred', 'active': false }])

describe("5.19. filter.js: Invalid inputs (Negative testing)", () => {
  it("0. should throw an exception for undefined value", () =>
  expect(() => {filter(users, undefined);}).toThrow());

  it("1. should throw an exception for undefined value", () =>
  expect(() => {filter(undefined, ({ active }) => active);}).toThrow());

  it("2. should throw an exception for undefined value", () =>
  expect(() => {filter(undefined, undefined);}).toThrow());
});

describe("5.19. filter.js: Valid inputs (Positive testing)", () => {
  it("10. Should correctly filter with predicate", () =>
  expect(filter(users, ({ active }) => active)).toStrictEqual([{"active": true, "user": "barney"}]));
});