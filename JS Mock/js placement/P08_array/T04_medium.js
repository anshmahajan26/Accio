//two sum
//brute force
function twoSum(){
  let nums=[1,2,3,4,7]
  let target=9
   for(let i=0;i<nums.length;i++){

        for(let j=i+1;j<nums.length;j++){

            if(nums[i]+nums[j]===target)

               console.log(i,j)

        }

    }
}
twoSum()
// optimized solution by map

function twoSumOptimized(){
let arr=[1,2,4,7,8]
let target=9;
let map=new Map()
for(let i=0;i<arr.length-1;i++){
 let diff=target-arr[i]
 if(map.has(diff)){
    return [map.get(diff),i]
 }
 map.set(arr[i],i)
}
}
console.log(twoSumOptimized())


console.log("roatated array")
//brute force
function rotatedArr(){
let arr=[1,2,3,4,5,6,7]
let temp=[]
let d=3
for(let i=d;i<arr.length;i++){
    temp.push(arr[i])
}
for(let j=0;j<d;j++){
    temp.push(arr[j])
}
console.log(temp)
}
rotatedArr()

//frequency counter
console.log("frequency counter")
//brute force
function frequencyCount(){
let arr=[1,2,4,2,1,1,6,7,7]
let obj={}
for(let num of arr){
    obj[num]=(obj[num] || 0)+1
}
console.log(obj)
}
frequencyCount()

//optimized using map
function frequencyMap(){
let arr=[1,2,4,2,1,1,6,7,7]
let map=new Map()
for(let num of arr){
    map.set(num, (map.get(num) || 0)+1)
}
console.log(map)
}
frequencyMap()




//intersection of arr
console.log("intersection of array")
function intersection(){
let a=[1,2,3,4]
let b=[3,4,5,6,6]

let set=new Set(b)
a.filter((x)=>{
    if(set.has(x)){
        console.log(x)
    }
})
}
intersection()



// merge two sorteed array
console.log("merge two sorted arry")
function mergeSortedArr(){
 let arr1=[0,2,4,6,8]
 let arr2=[1,3,5,7]
 let result=[]
 let i=0
 let j=0
 while(i<arr1.length && j<arr2.length){
    if(arr1[i]<=arr2[j]){
        result.push(arr1[i])
        i++
    }else{
        result.push(arr2[j])
        j++
    }
 }
 //remaining elements in arr1
 while(i<arr1.length){
    result.push(arr1[i])
    i++
 }
 //remaining elements in arr2
 while(j<arr2.length){
    result.push(arr[j])
    j++
 }
 console.log(result)
}
mergeSortedArr()



//kadanes algoritham
//maximum sub array sum

console.log("kadanes algorith maximum sub array sum")
function kadane(){
let arr=[-2,1,-3,4,-1,2,1,-5,4]
let maxsum=arr[0]
let currsum=arr[0]
for(let i=0;i<arr.length;i++){
    currsum=Math.max(arr[i],currsum+arr[i])
    maxsum=Math.max(currsum,maxsum)
}
console.log(maxsum)
}
kadane()



// best time to buy and sell stock
console.log("best time to buy and sell stock")
function maxProfit(prices) {
    let min = Infinity; // Start with the largest possible number
    let profit = 0;     // Best profit found so far
    
    for (let price of prices) {
        // Update the minimum price seen so far
        min = Math.min(min, price);

        // Calculate profit if we sold today
        profit = Math.max(profit, price - min);
        
    }
    
     console.log("time to buy"+min)
     
     console.log("total profit"+profit)
     
}
maxProfit([7,1,2,3,6,4])