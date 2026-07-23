//Runs the code block at least once, even if the condition is false.

function one(){
    let i=1;
    do{
        console.log(i)
    }
    while(i<=5)
}
one()

//Example where condition is false:
function two(){
    let number = 10;

do {
  console.log("This runs once");
} while (number < 5);
}
two();


//diff
// while (false) {
//   console.log("Will not run");
// }

// do {
//   console.log("Runs once");
// } while (false);