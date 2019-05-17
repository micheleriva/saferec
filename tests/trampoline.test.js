const rec = require("../src");

function factorial(num) {
  return num === 0
         ? 1
         : (num * factorial(num - 1));
}

test("Testing 'rec' on a simple factorial function", () => {
  
  expect(rec(() => factorial(10))).toBe(3628800);
  expect(rec(() => factorial(100))).toBe(9.33262154439441e+157);
  expect(rec(() => factorial(1000))).toBe(Infinity);

});