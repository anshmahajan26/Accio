let str = "anshmah";
console.log(str.slice(-1,-3));
// 🔥 STRING SLICE NOTES (with negative index)

// let str = "anshmah";

// 📌 Positive Index:
// a   n   s   h   m   a   h
// 0   1   2   3   4   5   6

// 📌 Negative Index:
// a   n   s   h   m   a   h
// -7 -6 -5 -4 -3 -2 -1

// ✅ Rule:
// negative index = length + index
// length = 7

// Example:
// -1 → 7 + (-1) = 6 (last char)
// -3 → 7 + (-3) = 4

// -----------------------------

// 🔹 slice(start, end)
// start → included
// end → excluded

// -----------------------------

// ✅ Examples:

// str.slice(1,2) → "n"

// str.slice(-1) → "h"   // last char

// str.slice(-3) → "mah" // last 3 chars

// str.slice(-5, -2)
// → convert: (2,5)
// → output: "shm"

// str.slice(-4, -1)
// → convert: (3,6)
// → output: "hma"

// -----------------------------

// ⚡ Trick:
// Convert negative → positive → apply normal slice

// -----------------------------

// ⚠️ slice() does NOT change original string