// Mod 0 Session 3 Arrays CFU
// ==========================

var strings = ["alpha", "beta", "gamma", "delta"]
var numbers = [0, 1, 2, 3]
var booleans = [true, false, true, false]

// .push() will add new variable(s) I designate within () and add it to the end of the array
strings.push("epsilon")
console.log(strings)

// .unshift() will add new variable(s) I designate within () and add it to the start of the array
numbers.unshift(-2, -1)
console.log(numbers)


booleans.pop()
console.log(booleans)
// .pop() will remove the final variable in the array

// ===========================
// Index Positions
// ===========================

// To access an element in an array, you must reference its index number.
// Index numbers are counted starting at 0
// For example: in strings = ["alpha", "beta", "gamma", "delta"], alpha's index number is 0,
// and gamma's index number is 2. Brackets after the array name can be used to indicate reference numbers.

// This will print the 3rd element, "gamma", in my strings array.
console.log(strings[2])

// This will print the 1st element in my numbers array.
// NOTE: I used .unshift in line 13 to add -2 and -1 to the start of the array
// so the console should print -2
console.log(numbers[0])