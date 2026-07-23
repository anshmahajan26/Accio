// Hoisting is JavaScript’s behavior of processing declarations before executing code.
// JavaScript conceptually moves declarations to the top of their scope.
// Important: JavaScript does not literally move code. It reserves memory for declarations before execution begins.

//var declarations are hoisted and initialized with undefined.

//let is hoisted, but it is not initialized immediately.
// The variable exists in memory, but it cannot be accessed before its declaration.

// const behaves similarly to let.
// const must also be initialized at the time of declaration.



// Hoisting with Function Declarations
// Function declarations are fully hoisted, so they can be called before they appear in code.

// Function Expression Hoisting
// Function expressions depend on whether they use var, let, or const.

// Temporal Dead Zone (TDZ)
// The Temporal Dead Zone is the period between entering a scope and declaring a let or const variable.

