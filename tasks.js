// Task 1: Shopping Cart Total with Discounts
let cart = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 3 },
  { name: "Shoes", price: 50, quantity: 1 }
]

let subtotal = 0
let totalQuantity = 0

for (let i = 0; i < cart.length; i++) {
  subtotal += cart[i].price * cart[i].quantity
  totalQuantity += cart[i].quantity
}

let discountRate = 0

if (totalQuantity > 10) {
  discountRate = 0.2
} else if (totalQuantity > 5) {
  discountRate = 0.1
}

let discountAmount = subtotal * discountRate
let finalTotal = subtotal - discountAmount

console.log("Subtotal: $" + subtotal)
console.log("Discount: $" + discountAmount)
console.log("Final Total: $" + finalTotal)


// Task 2: Type Validator
let values = [42, "hello", true, null, { name: "Bob" }, [1, 2]]

let counts = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  array: 0,
  null: 0
}

for (let i = 0; i < values.length; i++) {
  let type = typeof values[i]
  if (values[i] === null) {
    counts.null += 1
  } else if (Array.isArray(values[i])) {
    counts.array += 1
  } else if (type === "object") {
    counts.object += 1
  } else if (type === "number") {
    counts.number += 1
  } else if (type === "string") {
    counts.string += 1
  } else if (type === "boolean") {
    counts.boolean += 1
  }
}

console.log(counts)


// Task 3: Compound Interest Calculator
let principal = 1000
let rate = 0.05
let years = 5

if (principal > 0 && rate > 0 && years > 0) {
  let finalAmount = principal * Math.pow(1 + rate, years)
  let interestEarned = finalAmount - principal

  let result = {
    finalAmount: finalAmount,
    interestEarned: interestEarned
  }

  console.log(result)
} else {
  console.log("Please enter positive numbers for principal, rate, and years.")
}
