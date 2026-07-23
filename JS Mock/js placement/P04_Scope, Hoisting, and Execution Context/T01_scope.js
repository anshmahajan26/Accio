//Scope means the area of code where a variable, function, or object can be accessed.
// JavaScript mainly has three types of scope:
// Global scope
// Function scope
// Block scope

// 2. Global Scope
// A variable declared outside all functions and blocks belongs to the global scope.

function one(){
  let collegename="moze"
  function demo(){
    console.log(collegename)
  }
  demo()
  console.log(collegename)
}
// one()


// 3. Function Scope
// Variables declared with var, let, or const inside a function are available only inside that function.
function two(){
function sum(){
    let a=10;
    let b=20;
   console.log(a+b)
}
sum()
}
// two()


// 4. Block Scope
// A block is code written inside curly braces {}.
// Examples of blocks:

function three(){
if (true) {
  // block
}

for (let i = 0; i < 3; i++) {
  // block
}

while (true) {
  // block
}
}
// three()


