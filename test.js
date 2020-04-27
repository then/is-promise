var assert = require('assert');
var isPromise = require('./');

// `.then` methods on primative types should
// not make them count as promises
String.prototype.then = () => {};
Number.prototype.then = () => {};
Boolean.prototype.then = () => {};

assert(isPromise(null) === false);
assert(isPromise(undefined) === false);
assert(isPromise(0) === false);
assert(isPromise(-42) === false);
assert(isPromise(42) === false);
assert(isPromise('') === false);
assert(isPromise('then') === false);
assert(isPromise(false) === false);
assert(isPromise(true) === false);
assert(isPromise({}) === false);
assert(isPromise({then: true}) === false);
assert(isPromise([]) === false);
assert(isPromise([true]) === false);
assert(isPromise(() => {}) === false);

// This looks similar enough to a promise
// that promises/A+ says we should treat
// it as a promise.
var promise = {then: function () {}};

assert(isPromise(promise) === true);
const fn = () => {};
fn.then = () => {};
assert(isPromise(fn) === true);

console.log('common.js tests passed')

try {
  require('is-promise');
  const result = require('child_process').spawnSync('node', ['--experimental-modules', 'test.mjs'], {cwd: __dirname, stdio: 'inherit'});
  if (result.status) process.exit(result.status);
} catch (e) {
  if (e.code !== 'MODULE_NOT_FOUND') throw e;
}
