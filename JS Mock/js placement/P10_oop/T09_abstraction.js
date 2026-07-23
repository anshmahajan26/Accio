// Abstraction means hiding complex logic and showing only what the user needs.
// For example, when you drive a car, you use:
// startCar()
// You do not need to know how the engine works internally.

class Coffiemachine{
    #boilwater(){
        console.log("water boiling")
    }
    #addcoffie(){
        console.log("adding coffie")
    }
    makecoffie(){
        this.#boilwater()
        this.#addcoffie()
        console.log("coffie is ready")
    }
}

let coffie=new Coffiemachine()
coffie.makecoffie()