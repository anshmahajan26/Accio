//Memoization is an optimization technique where function results are stored in a cache.
//  If the same input is used again, the stored result is returned instead of calculating it again.

// Without Memoization
function one(){
function square(num) {
  console.log("Calculating...");
  return num * num;
}

console.log(square(5));
console.log(square(5));
}
one()



// With Memoization
function two(){
function memoizedSquare() {
  const cache = {};

  return function (num) {
    if (cache[num]) {
      console.log("From cache");
      return cache[num];
    }

    console.log("Calculating...");
    cache[num] = num * num;

    return cache[num];
  };
}

const square = memoizedSquare();

console.log(square(5)); // Calculating... 25
console.log(square(5)); // From cache 25
}
two()