//A callback function is a function passed as an argument to another function.
function one(){
    function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Om", sayBye);
}
// one()


//common example is setTimeout funtion
function two(){
    setTimeout(()=>{
        console.log("hello")
    },2000)
}
two()