//string traversing
function stringtraversing(){
  let str="javascript"
  for(char of str){
    console.log(char)              //str[i]
  }
}
stringtraversing()


//length of string without length
function length(){
    let str="javascript"
    let count=0
    for(let char of str){
        count++
    }
    console.log("lenghht of string"+count)
}
length()


//count of vowels
function vowels(){
  let str="javascript"
  str.toLowerCase();
  let count=0
  for(let char of str){
    if(char=="a" || char=="e" || char=="i"|| char=="o" || char=="u"){   //if("aeiou".includes(char))
        count++
    }
  }
  console.log("count of vowels"+count)
}
vowels()


//count consonent
function consonent(){
let str="javascript"
str.toLowerCase()
let count=0
for(let char of str){
    if(!"aeiou".includes(char)){
        count++
    }
}
console.log("count of consonents"+count)
}
consonent()


function countUppercase(){
  let str="JavaScript"
  let count=0
  for(let char of str){
    if(char>="A" && char<="Z"){
        count++
    }
  }
  console.log("count of uppercase letters "+count)
}
countUppercase()

//count lowercase letters
function countLowercase(){
  let str="JavaScript"
  let count=0
  for(let char of str){
    if(char>="a"  & char<="z"){
        count++
    }
  }
  console.log("count of lowercase letteers"+count)
}
countLowercase()


//count digits
function countDigits(){
  let str="abc1234"
  str.toLocaleLowerCase()
  let count=0
  for(let char of str){
    if(char>="0"  && char<="9"){
        count ++
    }
  }
  console.log("no of digits "+count)
}
countDigits()


//coount special charachters
function countSpecial(){
let str="abc@2#$0"
let count = 0;

    for (const ch of str) {

        if (
            !(ch >= "A" && ch <= "Z") &&
            !(ch >= "a" && ch <= "z") &&
            !(ch >= "0" && ch <= "9") &&
            ch !== " "
        ) {
            count++;
        }

    }

    console.log("count of special chars"+count)
}
countSpecial()


//count spaces
function countSpaces(){
let str="i love js"
str.toLowerCase()
let count=0
for(let char of str){
    if(char==" "){
        count++
    }
}
console.log("count of spaces: "+count)
}
countSpaces()


//count words
function countWords(){
  let str="i love js"
  let length=str.trim().split(" ").length
  console.log(length)
}
countWords()


//reverse a string
function reverse(){
let str="javascript"
let rev=str.split("").reverse().join("")



console.log(rev)
}
reverse()

//reverse strimng method two
function reverseTwo(){
  let str="javascript"
  let rev=""
  for(let i=str.length-1;i>=0;i--){
    rev+=str[i]
  }
  console.log(rev)
}
reverseTwo()


//checking palindrome
function palindrome(){
  let str="madam"
  str.toLowerCase()
  let left=0
  let right=str.length-1
  while(left<right){
    if(str[left]!==str[right]){
        return false
    }
    left++
    right--
  }
  return true
}
console.log(palindrome())

//remove spaces
function removeSpaces(){
let str="i love js"
let str2=""
for(let char of str){
    if(char!==" "){
        str2+=char
    }
}
console.log(str2)
}
removeSpaces()


//remove duplicate
function removeDuplicate(){
let str="aabbccdd"
let result=""
let set=new Set()
for(let char of str){
    if(!set.has(char)){
        set.add(char)
        result+=char
    }
}
console.log(result)
}
removeDuplicate()



//toggle case 
function toggleCase(){
  let str="JavaScript"
  let result=""
  for(let char of str){
    if(char>="A"&&char<="Z"){
        result+=char.toLowerCase()
        
    }else if(char>="a"&&char<="z"){
        result+=char.toUpperCase()
        
    }else{
        result+=char
    }
  }
  console.log(result)
}
toggleCase()

//character print
function printCharacter(){
  let str="javascript"
  console.log(str[0])
  console.log(str[str.length-1])
}
printCharacter()


//print charaters of even indexes
function evenindex(){
let str="javascript"
let result=""
for(let i=1;i<str.length;i+=2){
    result+=str[i]
}
console.log(result)
}
evenindex()

//prinnt at odd index
function oddindex(){
let str="javascript"
let result=""
for(let i=0;i<str.length;i+=2){
    result+=str[i]
}
console.log(result)
}
oddindex()


//count occurances 
function occurances(str,target){
    let count=0
    for(let char of str){
        if(char===target){
            count++
        }
    }
    console.log(count)
}
occurances("javascript","a")

//first occurance of char
function firstOccurance(str,target){
    for(let i=0;i<str.length;i++){
        if(str[i]===target){
            return i
        }
    }
}
console.log(firstOccurance("javascript","a"))


//lastoccurance of char
function lastoccurance(str,target){
for(let i=str.length-1;i>=0;i--){
    if(str[i]===target){
        return i
    }
}
}
console.log(lastoccurance("javascript","a"))

//replace space with hyphemes
function hyphems(){
  let str="i love js"
  let result=""
  for(let char of str){
    if(char===" "){
        result+="-"
    }else{
        result+=char
    }
  }
  console.log(result)
}
hyphems()