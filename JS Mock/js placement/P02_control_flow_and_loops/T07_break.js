//break immediately stops a loop or switch.

function one(){
    for(let i=0;i<10;i++){
        if(i===5){
            break
        }
        console.log(i)
    }
}
// one()

//Example in an array search:
function two(){
    let numbers=[10,20,30,40,50]
    for(let num of numbers){
        if(num===30){
            console.log(num)
            break
        }
        console.log(num)
    }
}
two()