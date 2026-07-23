//OOP means Object-Oriented Programming.
//  It is a way of writing code by grouping related data(properties) and functions together inside objects.
//For example, a Car object can contain:
//data: brand, color, speed
//Functions: start(), stop(), drive()
let car={
    brand:"tesla",
    model:123,
    start(){
        console.log("starting")
    },
    break(){
        console.log("car stoped")
    }

}
console.log(car.brand)
car.start()
car.break()