// Pure Function
// A pure function:
// Gives the same output for the same input.
// Does not modify anything outside itself.
// Has no side effects.

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Always 5

// Impure Function
// An impure function changes external data or depends on external data.

let total = 0;
function addToTotal(value) {
  total += value;
}
addToTotal(10);
console.log(total); // 10