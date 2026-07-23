//binds data(properties) and methods togeter

class Bank{
    #balance=0;
    deposit(amount){
        if(amount<0){
            console.log("amount should be grether that zero")
            return
        }
        this.#balance+=amount
    }
    withdraw(amount){
        if(amount>this.#balance){
            console.log("insuffficient balance")
            return
        }
        this.#balance-=amount
    }
    getbalance(){
        console.log(this.#balance)
    }
}

let acount=new Bank()
acount.deposit(10000)
acount.withdraw(500)
acount.getbalance()