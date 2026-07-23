//A closure is created when a function remembers and can access variables from its outer lexical scope, 
// even after the outer function has finished executing.

function one(){
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

let greet = outer();
greet(); // Hello
}
// one()


//counters
function two(){
 function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
}
two()