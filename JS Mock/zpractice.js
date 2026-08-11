function max (){
   let arr = [1,2,4,2,5,8]
   let max = arr[0];
   for ( let i =0; i< arr.length;i++){
      if(arr[i]>max){
         max = arr[i];
      }
   }
   console.log(max);
}
max()

function min(){
   let arr=[1,2,4,2,5,8]
   let min = Infinity;
   for (let i =0; i<arr.length; i++){
      if(arr[i]<min){
         min = arr[i];
      }
   }
   console.log(min);
}
min()

function sumOfArray(){
    let arr=[1,2,4,2,5,8]
    let sum =0;
    for(let i =0; i<arr.length; i++){
      sum += arr[i];
    }
    console.log(sum);
}

sumOfArray();

function Rev(){
   let arr = [1, 2, 3, 4, 5];

   for(let i = arr.length; i>=arr.length; i--){
      console.log(arr);
   }
}
Rev()

function RevSwap(){
   let arr = [1, 2, 3, 4, 5];
   let left = 0;
   let right = arr.length-1;
   while(left<right){
      temp = arr[left]
      arr[left]= arr[right]
      arr[right]= temp;
      left++;
      right--;
   }
   console.log(arr);
}
RevSwap()

function sortNotsort(){
   let arr = [1, 2, 3, 4, 5, 6];

   for(let i =1; i<arr.length; i++){
      if(arr[i]<arr[i-1]){
         return false;
      }
   }
   return true;
}
sortNotsort()

// !SECIND LARGEST








function removeduplicate(){
   let arr = [1, 2, 3, 3, 4, 5, 5, 6];
   let unique=[]
   for(let i =0; i<arr.length; i++){
      
      if(!unique.includes(arr[i])){
         unique.push(arr[i]);      //let unique=[...new Set(arr)]
      }
   }
   console.log(unique);
}
removeduplicate()


function missing(arr,n){
    let total=n*(n+1)/2;
    let sum=0;
    for(let num of arr)
        sum+=num;
    return total-sum;
}
missing()



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


function moveZeroSwap(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    console.log(arr);
}
moveZero([1, 2, 0, 0, 4, 3]);



