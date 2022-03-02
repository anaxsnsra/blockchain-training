class Account{
    constructor(name,balance){      
        this.name = name
        this.balance = balance      
    }

    deposit(amount){
        this.balance = this.balance + amount
        return this.balance
    }

    withdraw(amount){
        if(this.balance < amount){
            return "Balance not enough!"
        }
        else{
            return this.balance = this.balance - amount
        }
    }
}
var newAcc = new Account("Anas",500)
newAcc.deposit(100)
var newWithdraw = newAcc.withdraw(500)
console.log(newAcc.name + "'s account. Balance : " + newWithdraw)

/*  
- The contructor will hold the temporary data for the parameter that have been set when called the class. 
- Deposit function will take the amount from param and add with the balance from the constructor class.
- Withdraw function 
    - Will have statement to check balance available to withdraw and it will return message if the balance are not enough.
    - If the balance is enough to withdraw then it will deducted balance from the total amount.
- Finally the final result will display total balance or message.
*/