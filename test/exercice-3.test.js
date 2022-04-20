import assert from "assert";
import { my_alpha_number } from "../index.js";
describe("exercice 3", function () {
  it("display the number stringify when number is pass", function () {
    assert.equal(my_alpha_number(10), "10");
    assert.equal(my_alpha_number(20), "20");
    assert.equal(my_alpha_number(0), "0");
    assert.equal(my_alpha_number(1), "1");
  });

  it("display the default number when void or non number is pass", function () {
    assert.equal(my_alpha_number(), "");
    assert.equal(my_alpha_number("20"), "");
    assert.equal(my_alpha_number(false), "");
    assert.equal(my_alpha_number([]), "");
  });
});
