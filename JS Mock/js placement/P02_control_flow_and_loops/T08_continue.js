//continue skips the current iteration and moves to the next one.

function one(){
    let numbers=[10,20,30,40,50]
    for(let num of numbers){
        if(num===30){
            continue
        }
        console.log(num)
    }
}
// one()

//Example: print only odd numbers.
function two(){
    for(i=1;i<=10;i++){
        if(i%2===0){
            continue
        }
        console.log(i)
    }
}
two()