function one(n){
     console.log("function one")
    for(let i=0;i<n;i++){
        row=""
        for(let j=0;j<n;j++){
            row+="* "
        }
        console.log(row)
    }
}
one(5)

//----------------------------------------------------
function two(n){
    console.log("function two")
     for(let i=0;i<n;i++){
        row=""
        for(let j=0;j<n;j++){
            row+=i+" "
        }
        console.log(row)
    }
}
two(5)

//-------------------------------------------
function three(n){
   console.log("function three")
   let count=0
     for(let i=0;i<n;i++){
        row=""
        for(let j=0;j<n;j++){
            row+=count+" "
            count++
        }
        console.log(row)
    }
}
three(3)

//-------------------------------

function four(n){
console.log("function four")
   
     for(let i=0;i<n;i++){
        let count=0
        row=""
        for(let j=0;j<n;j++){
            row+=count+" "                  // orr console.log j
            count++
        }
        console.log(row)
    }
}
four(4)

//--------------------------------
function five(n){
    console.log("function five")
for(let i=0;i<=n;i++){
    row=""
    for(let j=0;j<=n;j++){
        if(i==0 || i==n || j==0 || j==n){
            row+="* "
        }else{
           row+="  "
        }
    }
    console.log(row)
}
}
five(5)

//----------------------
function six(n){
  console.log("function six")
for(let i=0;i<=n;i++){
    row=""
    for(let j=0;j<=n;j++){
        if(i==j){
            row+="* "
        }else{
            row+="  "
        }
    }
    console.log(row)
}
}
six(5)

//-------------------------------------
function seven(n){
  console.log("function seven")
for(let i=0;i<n;i++){
    row=""
    for(let j=0;j<n;j++){
        if(i==j || i+j==n-1){
            row+="* "
        }else{
            row+="  "
        }
    }
    
    console.log(row)
}
}
seven(5)

//-------------------------------------
function eight(n){
console.log("function eight")
let mid=Math.floor(n/2)
for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<n;j++){
        if(i==mid || j==mid){
            row+="* "
        }else{
            row+="  "
        }
    }
    console.log(row)
}
}
eight(5)

//-----------------------

function nine(n){
console.log("function nine")
for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<n;j++){
        if(j%2==0){
            row+="* "
        }else{
            row+="  "
        }
    }
    console.log(row)
}
}
nine(5)

//------------------------------------
function ten(n){
console.log("function ten")
for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<n;j++){
        if(i%2==0){
            row+="* "
        }else{
            row+="  "
        }
    }
    console.log(row)
}
}
ten(5)

//---------------------------------
function eleven(n){
    console.log("function eleven")
    for(let i=0;i<n;i++){
        let row=""
        for(let j=0;j<n;j++){
           if((i+j)%2==0){
             row+="* "
           }else{
            row+="  "
           }
    }
    console.log(row)
}
}
eleven(5)

//----------------------

function twelve(n){
 console.log("function eleven")
    for(let i=0;i<n;i++){
        let row=""
        for(let j=0;j<n;j++){
           if((i+j)%2!=0){
             row+="* "
           }else{
            row+="  "
           }
    }
    console.log(row)
}
}
twelve(5)