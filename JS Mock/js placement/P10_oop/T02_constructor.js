// Before JavaScript classes were introduced, constructor functions were used to create multiple similar objects.
// A constructor function is a normal function used with the new keyword.

function Person(name,age){
    this.name=name
    this.age=age
}

let person1=new Person("om",22)
let person2=new Person("ansh",46)

console.log(person1.name)
console.log(person2.age)