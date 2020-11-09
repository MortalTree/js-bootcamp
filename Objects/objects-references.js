let myAccount = {
    name: 'Justin',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount
}

let addIncome = function (account, value) {
    account.income += value
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let summ = account.income - account.expenses
    return `Account for ${account.name} has R${summ} - R${account.income} income, R${account.expenses} expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 1600)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))