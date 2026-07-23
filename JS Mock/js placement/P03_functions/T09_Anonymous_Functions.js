//An anonymous function has no name.
function one(){
    let greet=function(name){
        console.log(`hello ${name}`)
    }
    greet("om")
}
one()