import compact from "../src/compact";

describe("5.9 compact.js: Valid inputs (Positive testing)", () => {
  it("0. [1,2,3] no falsely values", () =>
  expect(compact([1,2,3])).toEqual([1,2,3]));

  it("1. [] no falsely values", () =>
  expect(compact([])).toEqual([]));

  it("1. [0, 1, false, 2, '', 3] falsely values", () =>
  expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]));

  it("3. [false,’’123”,’1’,””] falsely values", () =>
  expect(compact([false,"123",'1',""])).toEqual(["123",'1']));
});