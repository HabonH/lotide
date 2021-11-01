const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return [4] for [1, 2, 3, 4, 5, 6, 7]", () =>
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]))
});
