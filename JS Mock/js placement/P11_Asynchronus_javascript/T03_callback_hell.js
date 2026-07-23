//Callback hell happens when many callbacks are nested inside each other, 
// making code difficult to read, understand, debug, and maintain.

function selectfood(food,callback){
    console.log("selecting food....")
    setTimeout(()=>{
        console.log(`${food} is selected..`)
        callback()
    },2000)
}

function orderfood(callback){
   console.log(`ordering food...`)
   setTimeout(()=>{
    console.log("food ordered!")
    callback()
   },2000)
   
}

function preparefood(callback){
    console.log("food is preparing....")
    setTimeout(()=>{
        console.log("food is prepared")
        callback()
    }
        ,2000)
}

function deleveredfood(){
    console.log("food is delevering")
    setTimeout(()=>{
        console.log("food is delevered successfuly")

    },2000)
}


selectfood("pizza",function(){
    orderfood(function(){
        preparefood(function(){
            deleveredfood(function(){
                console.log("order is completed...")
            })
        })
    })
})