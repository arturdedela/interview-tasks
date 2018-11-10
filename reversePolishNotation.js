

function reversePolishNotation(s) {
  const arr = s.split('');
  const numbers = [];

  for (let i = 0; i < arr.length; i++) {
    const number = Number.parseInt(arr[i]);
    if (isNaN(number)) {
      // arr[i] is operator
      const n2 = numbers.pop();
      const n1 = numbers.pop();
      numbers.push(eval(n1 + arr[i] + n2));
    } else {
      numbers.push(number);
    }
  }

  return numbers[0];
}

let result = reversePolishNotation('255/1-+4*');

console.log(result);