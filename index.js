module.exports = isPromise;

function isPromise(obj) {
  return (Promise && (obj instanceof Promise)) || (!!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function');
}
