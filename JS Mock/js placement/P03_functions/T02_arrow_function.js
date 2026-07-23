//Arrow functions are a shorter way to write functions.

// Arrow functions are a shorter way to write functions.

function one(){
    const add = (a, b) => {
  return a + b;
};
}
// one()


// If there is only one statement, you can remove {} and return.

function two(){
    const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
}
//two()


// One Parameter
function three(){
    const square = num => num * num;
    console.log(square(4)); // 16
}
//three()


// No Parameters
function four(){
    const greet = () => console.log("Hello");

greet();
}
//four()