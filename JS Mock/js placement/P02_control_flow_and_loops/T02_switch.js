//Used when one value must be compared with many fixed cases.

function one(){
    let day=2;
    switch(day){
        case 1:
            console.log("monday");
            break
        
        case 2:
            console.log("tuesday");
            break
        
        case 3:
            console.log("wednesday");
            break
        
        case 4:
            console.log("thursday");
            break
        
        default:
            console.log("invalid")
    }
}
one()

//Why break is important
//Without break, JavaScript continues executing the next cases. This is called fall-through.

function two(){
    let role="admin" 
    
    switch(role){
        case "admin":
            console.log("admin login!")
            break
        
        case "user":
            console.log("user login!")
            break
        
        default:
            console.log("invalid response");
    }
}
two()


//switch uses strict comparison
//switch compares values similar to ===.
 function three(){
    let num="1";
    switch(num){
        case 1:
            console.log("nnumber 1");
            break;
         case "1":
            console.log("string 1");
            break   
    }
 }
 three()

 