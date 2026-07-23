// A higher-order function is a function that:
// Takes another function as an argument, or
// Returns another function.

function calculator(a,b,operation){
    return operation(a,b);
}
let add=(x,y)=>x+y;
let sub=(x,y)=>x-y;

console.log(calculator(5,5,add))
console.log(calculator(5,5,sub))