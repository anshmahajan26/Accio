//call() runs the function immediately.

function greet(){
    console.log(`hello ${this.name}`)
}
let user={
    name:"om"
}
greet.call(user)

//call with arguments
function data(city,country){
    console.log(`congrats ${this.name},city:${city},country:${country}`)
}
let user1={
    name:"om"
}
data.call(user1,"pune","india")