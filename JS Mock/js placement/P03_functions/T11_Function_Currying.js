//Currying converts a function with multiple parameters into a chain of functions, each taking one parameter.
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(2)(5)); // 10