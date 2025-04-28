let income = 1000
let rent = 400
let groceries = 150
let savingsRate = 0.2

let totalExpenses = rent + groceries
let remaining = income - totalExpenses
let savings = remaining * savingsRate
let balance = remaining - savings

let budget = {
  totalExpenses: totalExpenses,
  remaining: remaining,
  savings: savings,
  balance: balance
}

console.log(budget)
console.log("Balance after savings: $" + balance)
