//properties
let car={
    brand:"tesla",
    model:"123",
    year:2025
}
console.log(car.year)

//Methods
//A function inside an object is called a method.
let user={
    name:"om",
    greet(){
        console.log(`hello ${this.name}`)
    }
}
user.greet()
//this refers to the object that calls the method.