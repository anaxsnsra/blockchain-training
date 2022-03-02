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

    transfer(balance, amount, newAccBalance){
        if(balance > amount){
            var transferAccAmount = amount;
            this.balance = balance;
            var balance = this.withdraw(amount);
            newAccBalance = newAccBalance + transferAccAmount;
            return "Success transfer : " + transferAccAmount + 
            " and " + this.name + " Account balance is : " + balance
        }
        else{
            return "not enough balance"
        }
    }
}

var newAcc = new DevAccount("Anas",1000)
newAcc.deposit(500)
newAcc.setBalance("Anas",1000)

var newAcc2 = new DevAccount("Amid",500)
newAcc2.deposit(10)

newAcc.transfer(newAcc.getBalance("Anas"),500,newAcc2.balance)

var getBalance = newAcc.getBalance("Anas");
var getBalance2 = newAcc2.getBalance("Amid");

console.log(getBalance)
console.log(getBalance2)

/*
- The process of inheritance is to make DevAccount class can call function/method that is declare in parent class.
- The set balance method is to update balance when money in.
- The get balance method is to display current balance that available for the current account.
- 

*/