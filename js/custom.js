
// add click event listener for the calculate button
document.getElementById('calculate-btn').addEventListener('click', function(){

    // get income amount
    const incomeAmount = inputFieldAmount('income-amount');

    // get food expenses
    const foodExpense = inputFieldAmount('food-expense');
    // get rent expenses
    const rentExpense = inputFieldAmount('rent-expense');
    // get clothes expense
    const clothesExpense = inputFieldAmount('clothes-expense');

    // validation-1:
    if(isNaN(incomeAmount) || isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense)){
        return alert("Input only number");
    }
    // validation-2:
    if((incomeAmount < 1) || (foodExpense < 1) || (rentExpense < 1) || (clothesExpense < 1)){
        return alert('Provide Only Positive Number')
    }

    // total expenses
    const totalExpenses = foodExpense + rentExpense + clothesExpense;

    // validation-3:
    if(totalExpenses > incomeAmount){
        return alert('Income ar chaite Cost beshi kora jabe na')
    }
    // set the total expenses
    setTextElementAmountById('total-expenses', totalExpenses);

    // after expense get the current balance
    const currentBalance = incomeAmount - totalExpenses;
    // set the current balance
    setTextElementAmountById('balance', currentBalance);
})

// add click event listener for the savings btn
document.getElementById('saving-btn').addEventListener('click', function(){
    // get income amount
    const incomeAmount = inputFieldAmount('income-amount');
    // get total expenses 
    const totalExpensesString = document.getElementById('total-expenses').innerText;
    const totalExpenses = parseInt(totalExpensesString);

    // get savings percentage value
    const savingsPercent = inputFieldAmount('saving-percent');

    // validation-4:
    if(savingsPercent > 100){
        return alert('100% ar beshi savings kora possible na')
    }
    // get savings amount 
    const savingsAmount = incomeAmount * (savingsPercent / 100);
    
    // get remaining balance 
    const remainingBalance = incomeAmount - (totalExpenses + savingsAmount);

    // validation-5:
    if(savingsAmount > remainingBalance){
        return alert('Balance ar chaite beshi save korte parbe na')
    }
    // set saving amount
    setTextElementAmountById('saving-amount', savingsAmount);
    // set remaining balance
    setTextElementAmountById('remaining-balance', remainingBalance);
})