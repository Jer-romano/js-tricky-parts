function createAccount(pin, amount = 0) {
    let officialPin = pin;
    let balance = amount;
    return {
        checkBalance: function checkBalance(inputPin) {
            if(inputPin !== officialPin) return "Invalid PIN.";
            return `$${balance}`;
        },

        deposit: function deposit(inputPin, depositAmt) {
            if(inputPin !== officialPin) return "Invalid PIN.";
            balance += depositAmt;

            return `Succesfully deposited $${depositAmt}. Current balance: $${balance}.`;
        },

        withdraw: function withdraw(inputPin, withdrawAmt) {
            if(inputPin !== officialPin) return "Invalid PIN.";
            if(withdrawAmt > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            
            balance -= withdrawAmt;
            return `Succesfully withdrew $${withdrawAmt}. Current balance: $${balance}.`;
        },

        changePin: function changePin(oldPin, newPin) {
            if(oldPin !== officialPin) return "Invalid PIN.";

            officialPin = newPin;
            return "PIN successfully changed!";

        } 
    };

}

module.exports = { createAccount };
