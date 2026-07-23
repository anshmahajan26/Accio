// Shallow Copy
// A shallow copy copies only the first level. Nested objects are still shared.

let user={
    name:"om",
    address:{
        city:"pune"
    }
}

let shallowcopy={...user}

shallowcopy.address.city="mumbai"
console.log(user)
console.log(shallowcopy)