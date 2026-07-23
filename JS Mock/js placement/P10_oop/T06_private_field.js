// Private fields start with #.
// They can only be accessed inside the class.

class Bankaccount{
    #balance=0;
    deposit(amount){
       this.#balance+=amount
    }
    withdrow(amount){
        this.#balance-=amount
    }
    getbalance(){
        return this.#balance
    }
}
let account=new Bankaccount()
account.deposit(5000)
account.withdrow(2500)
console.log(account.getbalance())