// Deep Copy
// A deep copy creates independent copies of nested objects too.

let user={
    name:"om",
    address:{
        city:"pune"
    }
}
let deepcopy=structuredClone(user)

deepcopy.address.city="mumbai"
console.log(user)
console.log(deepcopy)