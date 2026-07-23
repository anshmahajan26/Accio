function one(){
   let arr=[1,2,3]
   //.reverse()
   let result=[]
   for(let i=arr.length-1;i>=0;i--){
    result.push(arr[i])
   }
   console.log(result)
}
one()

function two(){
 const arr = [1,2,2,3,3];

const unique = [...new Set(arr)];

console.log(unique)
}
two()

function three(){
const arr = [5,2,10];

console.log(Math.max(...arr));
console.log(Math.min(...arr));
const sum = arr.reduce((a,b)=>a+b,0);
console.log(sum)
}
three()

function four(){
const arr = ["a","b","a"];

const freq = arr.reduce((acc,item)=>{

    acc[item] = (acc[item] || 0) + 1;

    return acc;

},{});

console.log(freq);
}
four()


function five(){
const arr = [1,[2,[3]]];

console.log(arr.flat(Infinity));
}
five()