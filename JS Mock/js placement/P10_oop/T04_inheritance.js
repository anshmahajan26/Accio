//in inheriatance child class can access and use properties and methods of parent class

class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}
class Dog extends Animal{
    bark(){
        console.log(`${this.name} is barking`)
    }
}

let animal1=new Animal("cat")
animal1.eat()

let dog1=new Dog("german")
dog1.bark()
dog1.eat()