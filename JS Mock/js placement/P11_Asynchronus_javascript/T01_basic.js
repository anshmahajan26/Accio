//synchronus javascript , runs code line by line

function one(){
    console.log("one")
console.log("two")
console.log("three")
}
one()


//asynchronus js , runs code waiting to complete previous 
function two(){
console.log("start")
setTimeout(()=>console.log("async"),2000)
console.log("end")
}
two()