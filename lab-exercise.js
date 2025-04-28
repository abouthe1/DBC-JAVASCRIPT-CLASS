let price = 100
const taxRate = 0.1
let quantity = 3

let totalCost = price * quantity * (1 + taxRate)
console.log(totalCost)

quantity = 5

totalCost = price * quantity * (1 + taxRate)
console.log(totalCost)

let score = 95
let message = "Great job!"
let isPassing = true
let grades = [90, 85, 88]
let student = { name: "Emma", age: 20 }

console.log(typeof score)
console.log(typeof message)
console.log(typeof isPassing)
console.log(typeof grades)
console.log(typeof student)

console.log(grades[1])
console.log(student.name)

let a = 10
let b = 3

console.log(a + b)
console.log(a % b)
console.log(a ** 2)

console.log(a > b)
console.log(a === b)

console.log((a > 5) && (b < 5))

a += 5
console.log(a)

console.log(5 == "5")
console.log(5 === "5")
