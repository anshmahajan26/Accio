//for...in
//Used to loop through object keys.
function one(){
    let user={
        name:"om",
        age:22,
        city:"pune"
    }
   for(let key in user){
    console.log(key,":",user[key])
   }
}
// one()

//for...of
//Used to loop through values of iterable objects such as arrays, strings, sets, and maps.

function two(){
    let colours=["red","blue","yellow"]
    for(let cols of colours){
        console.log(cols);
    }
}
// two()


//loop through string
function three(){
    let string="palindrome"
    for(let char of string){
        console.log(char)
    }
}
three()