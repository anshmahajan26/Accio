function max(){
console.log("Find Maximum Element")
let arr=[1,3,2,5,6,7,3]
let max=arr[0]
for(num of arr){
    if(arr[num]>max){
        max=arr[num]
    }
}
 console.log("max is "+max)
}
// max()

function min(){
    console.log("Find Minimum Element")
    let arr=[1,3,4,6,3,2]
    let min=arr[0]
    for(i of arr){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    console.log("min is"+min)
}
// min()

function sum(){
    let arr=[1,2,3,4]
  let total = 0;

    for (let num of arr)   //const sum = arr => arr.reduce((a,b)=>a+b,0);
        total += num;

    console.log("sum is"+total)
}
// sum()


function reverse(){
let arr=[1,2,3,4,5]

  let left = 0;
    let right = arr.length-1;

    while(left<right){

        [arr[left],arr[right]] =
        [arr[right],arr[left]];         //arr.reverse()

        left++;
        right--;
    }

console.log(arr)

}
// reverse()

//unique=[]
// for(i=arr.length-1;i>=0;i--){
//     unique.push(arr[i])
// }


function countevenodd(){
let arr=[1,2,3,4,5,6,7,8]
let even=0
let odd=0
for(num of arr){
    if(num%2===0)even++
    else odd++
}
console.log("even: "+even+"odd:"+odd)
}
// countevenodd()

function issorted(){
let arr=[1,5,3,4,5,6]
 for(let i=1;i<arr.length;i++){

        if(arr[i]<arr[i-1])
            return false;

    }

    return true;

}

// console.log(issorted())

function secondlargest(){
    let arr=[1,2,3,4,5,6]
    let max=arr[0]
    let seclarge=arr[0]
    for(num of arr){
        if(num>max){
            seclarge=max
            max=num
        }
        else if(num<max && num>seclarge){
            seclarge=num
        }
    }
    console.log("seclarge"+seclarge)
}
// secondlargest()


function removeduplicate(){
    let arr=[1,2,3,3,4,5,5,6]               //can be solve with set
    let unique=[]
    for(let num of arr){
          if(!unique.includes(num))               //let unique=[...new Set(arr)]
            unique.push(num);

    }

    console.log(unique)
}
// removeduplicate()


function missing(arr,n){

    let total=n*(n+1)/2;

    let sum=0;

    for(let num of arr)
        sum+=num;

    return total-sum;

}
// missing()



function movezeroend(arr){
let result=[]
let zero=[]
for(num of arr){
    if(num===0){
        zero.push(0)
    }else{
        result.push(num)
    }
}
result=[...result,...zero]
console.log(result)
}
movezeroend([1,2,0,0,4,3])