document.getElementById('deposit-button').addEventListener('click', function () {
    const inputField = document.getElementById('deposit-input');
    const inputText = inputField.value;
    const inputAmount = parseInt(inputText)

    if(inputField.value == ''){
       return alert("Valo hoye jaw masud")
    }
    if(inputAmount < 1){
       return alert("Min Value is 1")
    }
    const depositTotalInput = document.getElementById('deposit-total');
    const depositTotalText = depositTotalInput.innerText;
    const previousDeposit = parseInt(depositTotalText);
    const newDeposit = inputAmount + previousDeposit;

    depositTotalInput.innerText = newDeposit;

    // balance update
    const balanceField =  document.getElementById('balace-input');
    const balanceText = balanceField.innerText;
    const previousBalance = parseInt(balanceText);

    const newBalance = previousBalance + inputAmount;
    balanceField.innerText = newBalance

    // clear
    inputField.value = ''
})


// withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputField = document.getElementById('withdraw-input');
    const inputText = inputField.value;
    const inputAmount = parseInt(inputText);

     if(inputField.value == ''){
       return alert("Valo hoye jaw masud")
    }
    if(inputAmount < 1){
       return alert("Min Value is 1")
    }


    const withdrawTotalInput = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotalInput.innerText;
    const previousWithdraw = parseInt(withdrawTotalText);
    const newWithdraw = inputAmount + previousWithdraw;

   withdrawTotalInput.innerText = newWithdraw;

    // balance update
    const balanceField =  document.getElementById('balace-input');
    const balanceText = balanceField.innerText;
    const previousBalance = parseInt(balanceText);

    const newBalance = previousBalance - inputAmount;
    balanceField.innerText = newBalance

    // clear
    inputField.value = ''
})
