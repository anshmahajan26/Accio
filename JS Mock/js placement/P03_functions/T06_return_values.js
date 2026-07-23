//The return keyword sends a value back from a function.

function one(){
function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result); // 30
}
// one()

//Without return, a function returns undefined.
function two(){
function greet() {
  console.log("Hello");
}

const result = greet();

console.log(result); // undefined
}
two()
// A function stops executing after return.