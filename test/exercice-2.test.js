import assert from "assert";
import { my_display_alpha_reverse } from "../index.js";
describe("exercice 2", function () {
  it("display the good alphabet reversed", function () {
    assert.equal(my_display_alpha_reverse(), "zyxwvutsrqponmlkjihgfedcba");
  });
});
