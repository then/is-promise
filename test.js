var isPromise = require('./');
var assert = require('better-assert');

// This looks similar enough to a promise
// that promises/A+ says we should treat
// it as a promise.
var promise = {then: function () {}};

describe('calling isPromise', function () {
  describe('with a promise', function () {
    it('returns true', function () {
      assert(isPromise(promise));
    });
  });
  describe('with null', function () {
    it('returns false', function () {
      assert(isPromise(null) === false);
    });
  });
  describe('with undefined', function () {
    it('returns false', function () {
      assert(isPromise(undefined) === false);
    });
  });
  describe('with a number', function () {
    it('returns false', function () {
      assert(!isPromise(0));
      assert(!isPromise(-42));
      assert(!isPromise(42));
    });
  });
  describe('with a string', function () {
    it('returns false', function () {
      assert(!isPromise(''));
      assert(!isPromise('then'));
    });
  });
  describe('with a bool', function () {
    it('returns false', function () {
      assert(!isPromise(false));
      assert(!isPromise(true));
    });
  });
  describe('with an object', function () {
    it('returns false', function () {
      assert(!isPromise({}));
      assert(!isPromise({then: true}));
    });
  });
  describe('with an array', function () {
    it('returns false', function () {
      assert(!isPromise([]));
      assert(!isPromise([true]));
    });
  });
});
