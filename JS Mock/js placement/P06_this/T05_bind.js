//bind() does not run the function immediately.
//It creates and returns a new function where this is permanently fixed.

function greet(){
    console.log(`hello ${this.name}`)
}
let user={
    name:"om"
}

let newfunc=greet.bind(user)
newfunc()