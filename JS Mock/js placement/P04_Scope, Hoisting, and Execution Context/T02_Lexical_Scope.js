//JavaScript uses lexical scope, meaning scope is decided based on where code is written,
//  not where a function is called.
// inner() can access outerValue because it was created inside outer().
// Important rule
// A child scope can access variables from its parent scope, but a parent scope cannot access variables from its child scope.
function one(){
function outer() {
  let outerValue = "I am from outer";

  function inner() {
    console.log(outerValue);
  }

  inner();
}

outer();
}
one()

