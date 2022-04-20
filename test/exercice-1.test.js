import assert from "assert";
import { my_display_alpha } from "../index.js";
describe("exercice 1", function () {
  it("display the good alphabet", function () {
    assert.equal(my_display_alpha(), "abcdefghijklmnopqrstuvwxyz");
  });
});
