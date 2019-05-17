/**
 * @function trampoline
 * @param {Function} func the recursive function you want to trampoline
 * @returns {any}
 */

function trampoline(func) {
  let result = func.apply(func, ...arguments);

  while(result && typeof(result) === "function") {
    result = result();
  }

  return result;
}

module.exports = trampoline;