// Function Declaration
// A function declaration uses the function keyword with a function name.
function one(){
    function greet(){
        console.log("hello")
    }
    greet()
}
// one()



// Function Expression
// A function expression stores a function inside a variable.
function two(){
    let add=function(a,b){
        return a+b;
    }
    console.log(add(2,3))
}
two()



// Main Difference: Hoisting
// Function declarations can be called before they are defined.
// Function expressions cannot be called before initialization.