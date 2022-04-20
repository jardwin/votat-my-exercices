import assert from "assert";
import { my_array_alpha } from "../index.js";
describe("exercice 5", function () {
  it("display the array of all char of the str", function () {
    assert.deepEqual(my_array_alpha("t"), ["t"]);
    assert.deepEqual(my_array_alpha("to"), ["t", "o"]);
    assert.deepEqual(my_array_alpha("toto"), ["t", "o", "t", "o"]);
    assert.deepEqual(my_array_alpha(), []);
    assert.deepEqual(my_array_alpha(10), []);
  });
});
