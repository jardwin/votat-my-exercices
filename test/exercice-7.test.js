import assert from "assert";
import { my_is_posi_neg } from "../index.js";
describe("exercice 7", function () {
  it("display if number is positive, negative or neutral", function () {
    assert.equal(my_is_posi_neg(10), "POSITIF");
    assert.equal(my_is_posi_neg(11), "POSITIF");
    assert.equal(my_is_posi_neg(-10), "NEGATIF");
    assert.equal(my_is_posi_neg(-11), "NEGATIF");
    assert.equal(my_is_posi_neg(0), "NEUTRAL");
  });

  it("display positive when is pass null or undefinied", function () {
    assert.equal(my_is_posi_neg(), "POSITIF");
    assert.equal(my_is_posi_neg(null), "POSITIF");
  });
});
