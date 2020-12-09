const account = {
    name: 'Justin Davis',
    expenses: [],
    addExpense (desc, amt) {
        this.expenses.push({description: desc, amount: amt})
    },
    getSummary () {
        
    }
}

// Expense -> description, amount
// addExpense -> description, amount (populate expenses arrey)

// getAccountSummary -> total up all expenses -> account name has $1250 in expenses
    // forEach

account.addExpense('Rent', 950)
account.addExpense('Coffee', 5)
console.log(account)


// console.log(account.getSummary())