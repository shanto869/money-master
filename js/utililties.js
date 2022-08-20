// get the amount of input field 
function inputFieldAmount(elementId){
    const inputAmountElement = document.getElementById(elementId);
    const inputAmountString = inputAmountElement.value;
    const inputAmount = parseInt(inputAmountString);
    // inputAmountElement.value = '';
    return inputAmount;
}

// set the amount of text element
function setTextElementAmountById(elementID, amount){
    const textElement = document.getElementById(elementID);
    textElement.innerText = amount;
}
