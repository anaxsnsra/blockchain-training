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
        this.balance = this.balance - amount
        if(this.balance < amount){
            return "Balance not enough!"
        }
        else{
            return this.balance
        }
    }
}

class DevAccount extends Account{

    getBalance(owner){
        if(owner == this.name){       
        return this.balance;
        }
        else{
            return "Unauthorized user"
        }
    }

    setBalance(owner,moneyIn){
        if(owner == this.name){
            this.balance = this.balance + moneyIn;
            return this.balance;
        }  
        else{
            return "Unauthorized user"
        }       
    }

    transfer(acc1,acc2, amount){
        if(acc1.balance > amount){
            var balance = acc1.withdraw(amount);
            var newAccBalance = acc2.deposit(amount);
            return acc1.name + " new balance : " + balance + " and " + acc2.name + " new balance : " + newAccBalance
        }
        else{
            return "not enough balance"
        }
    }
}

var newAcc = new DevAccount("Anas",1000)
var newAcc2 = new DevAccount("Amid",500)

newAcc.transfer(newAcc,newAcc2,500)
newAcc.setBalance(newAcc.name,500)
newAcc2.setBalance(newAcc2.name,50)

var balanceAcc1 = newAcc.getBalance(newAcc.name)
var balanceAcc2 = newAcc2.getBalance(newAcc2.name)

console.log("Get " + newAcc.name + " balance : " + balanceAcc1)
console.log("Get " + newAcc2.name + " balance : " + balanceAcc2)

/*
- The process of inheritance is to make DevAccount class can call function/method that is declare in parent class.
- The set balance method is to update balance when money in.
- The get balance method is to display current balance that available for the current account.
- Transfer method is to transfer balance from first account to another account and set the new balance for the other account.
- Finally it will display both account balance.
*/