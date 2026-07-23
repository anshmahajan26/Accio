//Polymorphism means the same method name can work differently depending on the object.

class Animal{
    constructor(name){
        this.name=name
    }
}
class Dog extends Animal{
    sound(){
        console.log("barking")
    }
}
class Cat extends Animal{
    sound(){
        console.log("mewww")
    }
}

let animals=[new Dog(),new Cat()]
animals.forEach((animal)=>animal.sound())