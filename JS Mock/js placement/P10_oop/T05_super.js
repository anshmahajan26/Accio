//super is used to call the parent class constructor or parent class methods.

class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    bark(){
        console.log(`${this.name} is barking`)
    }
}
let dog1=new Dog("tommy","labrador")
dog1.eat()
dog1.bark()
