var assert = require('assert');
var isPromise = require('is-promise');


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

console.log('CommonJS tests passed')

if(parseInt(process.version.split('.')[0].substr(1), 10) >= 14) {
  const result = require('child_process').spawnSync('node', ['test.mjs'], {cwd: __dirname, stdio: 'inherit'});
  process.exit(result.status);
}