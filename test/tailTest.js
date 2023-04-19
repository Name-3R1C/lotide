const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('return undefined for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('return [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
});