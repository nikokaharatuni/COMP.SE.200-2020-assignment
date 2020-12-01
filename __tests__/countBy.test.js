import countBy from "../src/countBy";

const users = Object.freeze([{ 'user': 'barney', 'active': true }, 
{ 'user': 'betty', 'active': true },{ 'user': 'fred', 'active': false } ]);

const usersByName = Object.freeze({'barney': { 'user': 'barney', 'active': true },
 'betty': { 'user': 'betty', 'active': true }, 'fred': { 'user': 'fred', 'active': false }});

 describe("5.10 countBy.js: Invalid inputs (Negative testing)", () => {
    it("0. should throw an exception for undefined value", () =>
    expect(() => {countBy(users, undefined);}).toThrow());

    it("1. should throw an exception for undefined value", () =>
    expect(() => {countBy(undefined, value => value.active);}).toThrow());

    it("2. should throw an exception for undefined values", () =>
    expect(() => {countBy(undefined, undefined);}).toThrow());

    it("3. should throw an exception for undefined value", () =>
    expect(() => {countBy(usersByName, undefined);}).toThrow());
  });

 describe("5.10 countBy.js: Valid inputs (Positive testing)", () => {
  it("10. See test plan documentation table 5.10 countBy.js", () =>
  expect(countBy(users, value => value.active)).toEqual({'true': 2, 'false': 1 }));

  it("11. See test plan documentation table 5.10 countBy.js", () =>
  expect(countBy(users, value => value.name)).toEqual({'barney': 1, 'fred': 1, 'betty': 1}));  

  it("12. See test plan documentation table 5.10 countBy.js", () =>
  expect(countBy(usersByName, value => value.active)).toEqual({ 'true': 2, 'false': 1 }));

  it("13. See test plan documentation table 5.10 countBy.js", () =>
  expect(countBy(usersByName, value => value.name)).toEqual({'barney': 1, 'fred': 1, 'betty': 1}));  

  it("14. See test plan documentation table 5.10 countBy.js", () =>
  expect(countBy(usersByName, value => value.doesntExist)).toEqual({undefined: 3}));  

  it("15. See test plan documentation table 5.10 countBy.js", () =>
  expect(countBy(null, value => value.active)).toEqual({}));
});