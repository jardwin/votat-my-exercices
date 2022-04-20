import assert from "assert";
import { my_sum } from "../index.js";
describe("exercice 0", function () {
  it("return 0 when args is null or omit", function () {
    assert.equal(my_sum(null), 0);
    assert.equal(my_sum(null, null), 0);
    assert.equal(my_sum(), 0);
  });
  it("return 0 when args is not number", function () {
    assert.equal(my_sum("toto", 10), 0);
    assert.equal(my_sum(10, "toto"), 0);
    assert.equal(my_sum("toto", "toto"), 0);
  });

  it("return the sum of two number", function () {
    assert.equal(my_sum(10, 10), 20);
    assert.equal(my_sum(10, 0), 10);
    assert.equal(my_sum(0, 10), 10);
  });
});
