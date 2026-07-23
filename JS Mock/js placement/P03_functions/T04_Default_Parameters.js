//Default parameters give a fallback value if an argument is not provided.

function one(){
    function greet(name="guest"){
        console.log(`hello ${name}`)
    }
    greet("om")
    greet()
}
one()