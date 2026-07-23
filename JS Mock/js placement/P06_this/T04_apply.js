//apply() is almost the same as call().
//It also runs the function immediately.
//takes arguments as array

function greet(city,country){
    console.log(`hello ${this.name},city:${city},country:${country}`)
}
let user={
    name:"om"
}
greet.apply(user,["pune","india"]);