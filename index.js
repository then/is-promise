module.exports = isPromise;
module.exports.default = isPromise;

function isPromise(obj) {
  return 'function' == typeof (obj && obj.then);
}
