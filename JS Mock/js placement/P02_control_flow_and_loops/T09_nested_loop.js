//A loop inside another loop is called a nested loop.

function one(){
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            console.log(`i=${i},j=${j}`)
        }
    }
}
// one()