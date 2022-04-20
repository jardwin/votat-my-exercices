import assert from "assert";
import { my_size_alpha } from "../index.js";
describe("exercice 4", function () {
  it("display the size of a string", function () {
    assert.equal(my_size_alpha("t"), 1);
    assert.equal(my_size_alpha("to"), 2);
    assert.equal(my_size_alpha("je suis une chaine avec des espaces"), 35);
    assert.equal(my_size_alpha(), 0);
  });
});
