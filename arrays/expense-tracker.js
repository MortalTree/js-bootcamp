const account = {
    name: 'Justin Davis',
    expenses: [],
    income: [],
    addExpense: function (desc, amt) {
        this.expenses.push({description: desc, amount: amt})
    },
    addIncome: function (desc, amt) {
        this.income.push({description: desc, amount: amt})
    },
    getAccountSummary: function () {
        let totExpense = 0
        let totIncome = 0
        
        this.expenses.forEach(function (element) {            
            totExpense += element.amount
        }) 

        this.income.forEach(function (element) {
            totIncome += element.amount
        })

        return `${this.name} has a balance of R${totIncome - totExpense}. Income of ${totIncome}, expenses of ${totExpense}`
    }
}

// CHALLENGE 1
// Expense -> description, amount
// addExpense -? description, amount
// getAccountSummary -> total up all expenses (forEach) Justin Davis has x total expenses

// CHALLENGE 2
// 1. add income array to account
// 2. addIncome method -> desciption, amount
// 3. tweak getAccountSummary to show balance, income and expenses


account.addExpense('Rent', 6000)
account.addExpense('Coffee', 30)
account.addExpense('WoW', 300)
account.addIncome('Job', 35000)

console.log(account.getAccountSummary())