//Runs multiple promises together and waits until all succeed.

const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Orders");
const p3 = Promise.resolve("Payments");

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  });

//-----------------------------------------------------------------------------------
  //more ex
  //If even one promise fails, Promise.all() fails immediately.
  let promise1=new Promise((resolve,reject)=>{
    let error=false
    if(!error){
        resolve("1 resolved")
    }else{
        reject("1 reejected")
    }
  })

  let promise2=new Promise((resolve,reject)=>{
    let error=false
    if(!error){
        resolve("2 resolved")
    }else{
        reject("2 reejected")
    }
  })

  let promise3=new Promise((resolve,reject)=>{
    let error=true
    if(!error){
        resolve("3 resolved")
    }else{
        reject("3 reejected")
    }
  })
//------------------------
//Promise.all()
  Promise.all([promise1,promise2,promise3])
  .then((results)=>{
   console.log(results)
  })
  .catch((errors)=>{
    console.log(errors)
  })
  .finally(()=>{
    console.log("all promises executed")
  })
  //------------------------------
//   Promise.allSettled()
Promise.allSettled([promise1,promise2,promise3])
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
.finally(()=>console.log("promise.allsettled execute"))



//----------------------------------
// Promise.race()
// Returns the result of the first promise that finishes.

const fast = new Promise((resolve) => {
  setTimeout(() => resolve("Fast response"), 1000);
});

const slow = new Promise((resolve) => {
  setTimeout(() => resolve("Slow response"), 3000);
});

Promise.race([fast, slow])
  .then((result) => console.log(result));

  //-------------------------------------------

//   Promise.any()
// Returns the first successful promise.
// It ignores rejected promises unless every promise fails.

Promise.any([
  Promise.reject("Server 1 failed"),
  Promise.resolve("Server 2 success"),
  Promise.reject("Server 3 failed")
])
  .then((result) => {
    console.log(result);
  });