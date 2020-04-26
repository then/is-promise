const assert = require('assert');
const isPromise = require('./');

// This looks similar enough to a promise
// that promises/A+ says we should treat
// it as a promise.
const thenableObj = { then: () => {} };
const thenableFunc = () => {};
thenableFunc.then = () => {};

const assertTrue = (val) => {
  assert.strictEqual(isPromise(val), true);
};

const assertFalse = (val) => {
  assert.strictEqual(isPromise(val), false);
};

describe('calling isPromise()', () => {
  describe('returns false when given', () => {
    it('null', () => {
      assertFalse(null);
    });
    it('undefined', () => {
      assertFalse(undefined);
    });
    it('numbers', () => {
      assertFalse(0);
      assertFalse(-42);
      assertFalse(42);
    });
    it('strings', () => {
      assertFalse('');
      assertFalse('then');
    });
    it('booleans', () => {
      assertFalse(false);
      assertFalse(true);
    });
    it('a object without a .then() method', () => {
      assertFalse({});
      assertFalse({ then: true });
    });
    it('with an array', () => {
      assertFalse([]);
      assertFalse([true]);
    });
    it('a function without a .then() method', () => {
      const fn = () => { };

      assertFalse(fn);
    });
  });
  describe('returns true when given', () => {
    it('a promise', () => {
      assertTrue(new Promise(()=>{}));
    });
    it('a resolved promise', () => {
      assertTrue(Promise.resolve());
    });
    it('a object with a .then() method', () => {
      assertTrue(thenableObj);
    });
    it('a function with a .then() method', () => {
      assertTrue(thenableFunc);
    });
  });
});
