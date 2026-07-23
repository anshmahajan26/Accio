//Recursion is when a function calls itself.
// Every recursive function needs:
// Base case — condition to stop recursion
// Recursive case — function calls itself with a smaller problem

function one(){
    function countdown(num){
        if(num<=0){
            console.log("end!")
            return
        }
        console.log(num)
        countdown(num-1);
    }
    countdown(5)
}
// one()

