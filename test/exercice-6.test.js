import assert from "assert";
import { my_length_array } from "../index.js";
describe("exercice 6", function () {
  it("display the size of a string", function () {
    assert.equal(my_length_array(["t", "o", "t", "o"]), 4);
    assert.equal(my_length_array([false, "o", 1, 1]), 4);
    assert.equal(my_length_array(), 0);
  });
});
