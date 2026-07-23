//Used when code should run only when a condition is true.

function one(){
  let age=20;
  if(age>=18){
    console.log("adult!");
  }
  else{
    console.log("minor");
  }
}
one();

//Multiple conditions: else if
function two(){
    let marks=75;
    if(marks>80){
        console.log("A grade")
    }
    else if(marks>=60){
        console.log("B grade")
    }else{
        console.log("C grade");
    }
}
two();

// Ternary Operator
// Short form of if...else.
//condition ? valueIfTrue : valueIfFalse;
function three(){
    let age=19;
    let result=age>=18?"adult!":"minor!";
    console.log(result);
}
three()


function four(){
    let isLoggedIn = true;
let result=isLoggedIn ? "Welcome back" : "Please log in"
console.log(result);
 }
 four()


 //if else if
 function five(){
  let marks=75
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : "C";
console.log(grade);
 }
 five()

 