//Partial application means fixing some arguments of a function and creating a new function that accepts the remaining arguments.
function multiply(a, b, c) {
  return a * b * c;
}

function partialMultiply(a) {
  return function (b, c) {
    return multiply(a, b, c);
  };
}

const multiplyBy2 = partialMultiply(2);

console.log(multiplyBy2(3, 4)); // 24