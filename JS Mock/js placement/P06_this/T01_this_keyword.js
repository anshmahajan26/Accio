//this keyword in global scope
console.log(this)       //global object--window


//this keyword in function
function x(){
   console.log(this)   // value of this key word is depend on strict /non strict mode 
                       // if strict mode give undefined  || in non strict mode give window
}
x()


let user={
    name:"om",
    greet:function(){
        console.log(`hello ${this.name}`)
    }
}
user.greet()