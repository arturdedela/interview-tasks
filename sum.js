

function sum(n) {
  let sum = n;

  function sumClosure(i) {
    sum += i;
    return sumClosure;
  }
  sumClosure.toString = function() {
    return sum;
  };

  return sumClosure;
}

sum(5)(2)(3)(8);

module.exports = sum;