// classes are more clener version to write javascript code 

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }

introduce(){
    console.log(`hello i am ${this.name}, and i am ${this.age} year ols`)
}
}

let person1=new Person("om",22)
person1.introduce()
