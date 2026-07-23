// promise are used to manage async task in js 
//use to solve callback hell issue

function one(){
let newpromise=new Promise((resolve,reject)=>{
        let success=true
        if(success){
            resolve("data received")
        }
        else{
            reject("error")
        }
})

}
// one()
// ---------------------------------------------------------------------------------------------

function two(){
let promiseone=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise is resolved")
        resolve()
    },3000)
})
promiseone.then(()=>{
    console.log("complete")
})
}
// two()

//-----------------------------------------------------------------------------------------

function three(){
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise two is resolved")
        resolve()
    },2000)
  }).then(()=>{
    console.log("complete")
  })
}
// three()

//------------------------------------------------------------------------------------------------------

function three(){
let promisethree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:"om",age:22})
    },2000)
})
promisethree.then((user)=>{
  console.log(user)
})

}
// three()

//----------------------------------------------------------------------------------------------------

function four(){
let promisefour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({name:"om",age:22})
        }
        else{
            reject("something went wrong!")
        }
    },2000)
}).then((user)=>{
    console.log(user)
    return user.name
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>console.log("promise is either resolve or reject"))

}
// four()

//------------------------------------------------------------------

function five(){
let promisefive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({name:"om",age:22})
        }else{
            reject("something went wrong")
        }
    },2000)
})
async function consumepromisefive(){
  try{
 let response=await promisefive
 console.log(response)
  }
  catch(error){
   console.log(error)
  }
}
consumepromisefive()

}
five()