//Rest parameters collect multiple arguments into an array.
 function one(){
    function sum(...numbers){
        let total=0
        for(let num of numbers){
            total+=num
        }
        console.log(total)
    }
    sum(10,20,30,40,50)
 }
 one()