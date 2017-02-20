module.exports = isPromise;

function isPromise(obj) {
  try {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  }
  catch ( err ) {
    return false;
  }
}
