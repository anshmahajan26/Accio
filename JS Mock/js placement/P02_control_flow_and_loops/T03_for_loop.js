//Used when you know how many times the code should run.
// for (initialization; condition; update) {}

function one(){
    for(let i=0;i<5;i++){
        console.log(i)
    }
}
one()

 
//loop through array
function two(){
    let fruits=["apple","banana","cherry","dragon"]
    for(let i=0;i<=fruits.length-1;i++){
        console.log(fruits[i]);
    }
}
two()

